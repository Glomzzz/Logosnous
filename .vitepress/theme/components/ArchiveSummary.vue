<template>
  <div class="timeline-wrap">
    <!-- 时间轴主体 -->
    <div class="timeline-item">
      <div class="year" @click="goToLink('archive', 'year', year+'')">
        <img :alt="locale.zodiac" :src="'/public/assets/components/archive/chinese-zodiac/' + getChineseZodiac(year) + '.svg'"
             :title="year != 0 ? locale.years[year % 12] : locale.unknownYear"
             class="chinese-zodiac" width="100"/>
        <a>近期文章</a>
      </div>
      <div class="timeline-item-content">
        <div class="articles">
            <span v-for="article in preview" class="article">
              <img :src="article.icon" :title="article.categoryDisplay" alt="category"
                   width="100" @click="goToLink('archive', 'category', article.category)">
              <a :href="article.path" class="title" target="_blank">{{ article.title }}</a>
              <br>
              <ArticleMetadata :article="article"/>
            </span>
        </div>
      </div>
      <div id="main"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
//@ts-ignore
import {data as localesData} from "../article.data.js";
import {getChineseZodiac, goToLink} from "../utils";
import {locales as archiveLocales} from "../../config/components/archive";

const lang = {value: 'root'}
const locale = archiveLocales[lang.value];

const articleData = localesData[lang.value];


// 文章原始数据和归档数据
let $articleData: any[];
let preview: any[];
let year = new Date().getFullYear();

/**
 * 初始化时间轴
 */
function initTimeline() {
  $articleData = [];
  if (articleData != undefined) {
    $articleData.push(...articleData);
  }
  // 文章数据归档处理
  // 对文章数据进行降序排序
  $articleData.sort((a, b) => b.date?.localeCompare(a.date) ?? true);

  preview = $articleData.slice(0, 4);
}

initTimeline();
</script>

<style scoped src="../styles/ArchiveSummary.css"></style>