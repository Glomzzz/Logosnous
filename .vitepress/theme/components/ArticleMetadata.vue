<template>
  <div class="meta-wrapper">
    <!--    <div class="meta-item original">-->
    <!--      <a-tag v-if="isOriginal" color="green">-->
    <!--        <img alt="from" src="/assets/components/metadata/award.svg" width="29"/>-->
    <!--        {{ locale.original.name }}-->
    <!--      </a-tag>-->
    <!--      <a-tag v-else color="arcoblue">-->
    <!--        <img alt="from" src="/assets/components/metadata/share.svg" width="29"/>-->
    <!--        {{ locale.reprint.name }}-->
    <!--      </a-tag>-->
    <!--    </div>-->
    <!--    <div class="meta-item">-->
    <!--      <span class="meta-icon author">-->
    <!--        <a v-if="isOriginal" :href="authorLink" :title="locale.author"> -->
    <!--          <img :src="authorIcon" alt="author-icon" width=30>-->
    <!--        </a>-->
    <!--        <span v-else :title="locale.author">-->
    <!--          <img :src="authorIcon" alt="author-icon" width=30>-->
    <!--        </span>-->
    <!--      </span>-->
    <!--      <span class="meta-content">-->
    <!--        <a v-if="isOriginal" :href="authorLink" :title="locale.authorLink">{{-->
    <!--            authorDisplay-->
    <!--          }}</a>-->
    <!--        <a v-else :href="authorLink" :title="locale.authorLink">{{ authorDisplay }}</a>-->
    <!--      </span>-->
    <!--    </div>-->
    <div class="meta-item">
      <span class="meta-icon date">
        <img
            :title="isOriginal ? locale.original.time : locale.reprint.time"
            alt="date"
            role="img"
            src="/assets/components/metadata/clock.svg"
            width=29>
      </span>
      <span v-if="date">
        <time :datetime="date.toISOString()"
              :title="dayjs().to(dayjs(date))"
              class="meta-content"
        >{{
            date.toLocaleString(lang, {
              year: "numeric",
              month: "numeric",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
            })
          }}</time>
      </span>
      <span v-else class="meta-content">
        <a :title="locale.unknownTime">{{ locale.unknownTime }} 
        </a>
      </span>

    </div>
    <div v-if="category" class="meta-item">
      <span class="meta-icon category">
        <img
            :title="locale.category"
            alt="category"
            role="img"
            src="/assets/components/metadata/folder.svg"
            width=29>
      </span>
      <span class="meta-content">
        <a
            :title="categoryDisplay"
            href="javascript:void(0);"
            target="_self"
            @click="goToLink('archive', 'category', categoryName)"
        >{{ categoryDisplay }}</a
        >
      </span>
    </div>
    <div v-if="showViewCount" class="meta-item">
      <span class="meta-icon pv">
        <img
            :title="locale.viewCount"
            alt="view-count"
            role="img"
            src="/assets/components/metadata/eye.svg"
            width=29
        >
      </span>
      <span :title="viewCount+''" class="meta-content" v-text="viewCount"></span>
    </div>
    <br>
    <div v-if="tags.length != 0" class="meta-item tag">
      <span class="meta-icon tag">
        <img
            :title="locale.tags"
            alt="tags"
            role="img"
            src="/assets/components/metadata/tags.svg"
            width=29
        >
      </span>
      <span class="meta-content">
        <span v-for="(tag, index) in tags" :key="index">
          <a
              :title="tag"
              href="javascript:void(0);"
              target="_self"
              @click="goToLink('archive', 'tag', tag)"
          >{{ tag }}</a
          >
          <span v-if="index != tags.length - 1">, </span>
        </span>
      </span>
    </div>
    <br>
    <div v-if="summary" class="meta-item tag">
      <span class="meta-icon tag">
        <img
            :src="category.icon"
            :title="locale.category"
            alt="category"
            role="img"
            width=27>
      </span>
      <span class="meta-content">
        {{ summary }}
      </span>

    </div>
  </div>
</template>

<script lang="ts" setup>
import {onMounted, reactive, toRefs} from "vue";
//@ts-ignore
import md5 from "blueimp-md5";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import relativeTime from "dayjs/plugin/relativeTime";
import {goToLink} from "../utils";
import {config, locales as metadataLocales} from "../../config/components/metadata";
import {categories, locales as categoryLocales} from "../../config/components/categories";

dayjs.extend(relativeTime);
dayjs.locale("root");
const lang = {value: 'root'}
const locale = metadataLocales[lang.value];

// 定义文章属性
const props = defineProps({
  article: Object,
  showCategory: {
    type: Boolean,
    default: true,
  },
});

const data = reactive({
  isOriginal: props.article?.isOriginal ?? true,
  author: props.article?.author,
  authorDisplay: props.article?.authorDisplay,
  authorLink: props.article?.authorLink,
  authorIcon: props.article?.authorIcon,
  showViewCount: config.showViewCount,
  viewCount: 0,
  date: props.article!.date ? new Date(props.article!.date) : null,
  categoryName: props.article?.category ?? 'none',
  tags: props.article?.tags ?? [],
  summary: props.article?.summary,
});
const {
  isOriginal,
  showViewCount,
  viewCount,
  date,
  categoryName,
  tags,
  summary
} = toRefs(data);

const category = categories[categoryName.value] ?? categories.none;
const categoryDisplay = categoryLocales[lang.value][categoryName.value] ?? categoryLocales[lang.value].none;
if (data.showViewCount) {
  // 记录并获取文章阅读数（使用文章标题 + 发布时间生成 MD5 值，作为文章的唯一标识）
  onMounted(() => {
    //@ts-ignore
    $api.getArticleViewCount(
        md5(props.article!.title + props.article!.date),
        location.href,
        function (viewCountData: number) {
          data.viewCount = viewCountData;
        }
    );
  });
}
</script>

<style scoped src="../styles/ArticleMetadata.css"></style>
