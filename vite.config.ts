import { defineConfig } from 'vite';
import Inspect from 'vite-plugin-inspect'
import UnoCSS from 'unocss/vite'
import { ThumbnailHashImages } from '@nolebase/vitepress-plugin-thumbnail-hash/vite'
import { PageProperties, PagePropertiesMarkdownSection } from '@nolebase/vitepress-plugin-page-properties/vite'
import {repoURL} from './.vitepress/config/site'
import { 
  GitChangelog, 
  GitChangelogMarkdownSection, 
} from '@nolebase/vitepress-plugin-git-changelog/vite'

import { locales as gitChangeLogLocales } from './.vitepress/config/components/gitchangelog'

import Components from 'unplugin-vue-components/vite';
import { ArcoResolver } from 'unplugin-vue-components/resolvers';
import {excludes} from './.vitepress/config/components/properties'

export default defineConfig(() => {
  return {
    build : {
      chunkSizeWarningLimit: 1024 * 1024 * 10,
    },
    
    optimizeDeps: {
      include: [ 
        '@nolebase/vitepress-plugin-enhanced-readabilities > @nolebase/ui > @rive-app/canvas', 
      ], 
      exclude: [ 
        '@nolebase/vitepress-plugin-enhanced-readabilities/client', 
        'vitepress'
      ], 
    },
    ssr: { 
      noExternal: [ 
        '@antv/g2plot',
        '@arco-design/web-vue',
        '@nolebase/*', 
        '@arco-design/*'
      ], 
    }, 
    plugins: [
      Components({
        dirs: ['.vitepress/theme/components'],
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        resolvers: [ArcoResolver({ sideEffect: true, resolveIcons: true })]
      }),
      
      GitChangelog({ 
        repoURL: () => repoURL, 
      }), 
      GitChangelogMarkdownSection({
      }),
      Inspect(),
      UnoCSS(),
      ThumbnailHashImages(),
      PageProperties(),
      PagePropertiesMarkdownSection({
        exclude(path:string):boolean{
          return excludes.find(b=> path.endsWith(b)) ? true : false;
        }
      })
    ],
  }
})