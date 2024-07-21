import type { DefaultTheme } from 'vitepress';
import { genCategories } from './components/categories';
import { rootMode } from './locales';
/**
 * 导航栏配置 / Navigation configuration
 */
 const navs: Record<string,DefaultTheme.Config['nav']> = {
    root :[
        {
            text: '文章',
            items: genCategories('root'),
            activeMatch: 'blogs'
        },
        {
          text: '标签',
          link: '/tag',
          activeMatch: 'tag'
        },
        {
          text: '时光轴',
          link: '/archive',
          activeMatch: '/archive'
        },
        {
          text: '关于',
          items: [
            { text: '关于心智档案', link: '/about/index', activeMatch: '/about/index' },
            { text: '关于我', link: 'https://github.com/Glomzzz'}
          ],
          activeMatch: '/about/'
        },
      ]
};


export function getNav(lang:string,dir?:string):DefaultTheme.Config['nav']{
  const nav = navs[lang]!;
  addDir(dir ?? lang,nav);
  return nav;
}

function addDir(dir:string,item:any){
  if(rootMode)return;
  if(item.routed) return;
  item.routed = true;
  if(Array.isArray(item)){
    item.forEach((i)=>addDir(dir,i));
  }else{
    item.link = prefix(dir,item.link);
    item.activeMatch = prefix(dir,item.activeMatch);
    if(item.items){
      addDir(dir,item.items);
    }
  }
}

function prefix(dir:string,item?:string):string|undefined{
  return item ? (item.startsWith("!") ? item : `${dir}${item}`) : undefined;
}