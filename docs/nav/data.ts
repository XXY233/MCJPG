import type { NavLink } from '../.vitepress/theme/types'

type NavData = {
  title: string
  items: NavLink[]
}

export const NAV_DATA: NavData[] = [
  {
    title: 'MCJPG',
    items: [
      {
        icon: '/logo.png',
        title: 'MCJPG组织',
        desc: 'MCJPG组织官网',
        link: 'https://mcjpg.org',
      },
      {
        icon: '/logo.png',
        title: 'MC导航',
        desc: '由MCJPG社区维护的MC导航站',
        link: 'https://mcjpg.org/nav',
      },
      {
        icon: '/logo.png',
        title: '论坛',
        desc: 'MCJPG社区交流论坛',
        link: 'https://bbs.mcjpg.org/',
      },
      {
        icon: '/logo.png',
        title: '图床',
        desc: 'MCJPG自建图床,支持5MB以下媒体分享',
        link: 'https://image.mcjpg.org/',
      },
      {
        icon: '/logo.png',
        title: '状态监测',
        desc: 'MCJPG各服务状态监测',
        link: 'https://status.mcjpg.org/',
      },
    ],
  },
  {
    title: 'MC官方网站',
    items: [
      {
        icon: 'https://www.minecraft.net/content/dam/minecraftnet/franchise/logos/Homepage_Download-Launcher_Creeper-Logo_500x500.png',
        title: 'Minecraft官网',
        link: 'https://www.minecraft.net/',
      },
      {
        icon: 'https://education.minecraft.net/etc.clientlibs/minecraft-edu/clientlibs/clientlib-common/resources/images/favicon/new-apple-icon.png',
        title: '教育版官网',
        link: 'https://education.minecraft.net/',
      },
      {
        icon: 'https://mc.163.com/favicon.ico',
        title: 'MC中国版官网',
        link: 'https://mc.163.com/',
      },
      {
        icon: 'https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/logos/Homepage_Gameplay-Trailer_MC-OV-logo_300x300.png',
        title: '反馈社区',
        desc: 'MC的官方反馈社区',
        link: 'https://feedback.minecraft.net/',
      },
      {
        icon: 'https://toolb.cn/favicon/bugs.mojang.com',
        title: 'Mojang Jira',
        desc: 'MC的官方BUG反馈社区',
        link: 'https://feedback.minecraft.net/',
      },
      {
        icon: 'https://mc.163.com/favicon.ico',
        title: '网易版论坛',
        desc: '中国版官方论坛',
        link: 'https://mc.netease.com/',
      },
    ],
  },
  {
    title: '非官方论坛',
    items: [
      {
        icon: '/logo.png',
        title: 'MCJPG论坛',
        desc: 'MCJPG社区交流论坛',
        link: 'https://bbs.mcjpg.org/',
      },
      {
        icon: 'https://toolb.cn/favicon/www.minecraftforum.net',
        title: 'Minecraft Forum',
        desc: '国外比较有名的非官方Minecraft论坛',
        link: 'https://www.minecraftforum.net/',
      },
      {
        icon: 'https://www.minebbs.com/favicon.ico',
        title: 'MineBBS',
        desc: '一个国内的我的世界中文论坛，主营基岩版',
        link: 'https://www.minebbs.com/',
      },
      {
        icon: 'https://klpbbs.com/favicon.ico',
        title: '苦力怕论坛',
        desc: '国内的我的世界中文论坛，主营基岩版',
        link: 'https://klpbbs.com/',
      },
      {
        icon: 'https://www.bangbang93.com/favicon.ico',
        title: 'Bangbang93论坛',
        desc: '十分著名的下载源国内镜像站——BMCLAPI',
        link: 'https://www.bangbang93.com',
      },
    ],
  },
  {
    title: '百科',
    items: [
      {
        icon: 'https://zh.minecraft.wiki/favicon.ico',
        title: '中文 Minecraft Wiki',
        desc: 'Minecraft最著名的、最权威的非官方百科网站',
        link: 'https://minecraft.wiki/',
      },
      {
        icon: 'https://www.digminecraft.com/favicon.ico',
        title: 'DigMinecraft',
        desc: '一个英文MC百科网站',
        link: 'https://www.digminecraft.com/',
      },
      {
        icon: 'https://www.mcmod.cn/favicon.ico',
        title: 'MC模组百科',
        desc: '国内很著名的MC模组百科网站',
        link: 'https://nextjs.org',
      },
      {
        icon: '',
        title: 'Wiki.vg',
        desc: '一个英文的Minecraft开发文档库',
        link: 'https://wiki.vg/',
      },
      {
        icon: 'https://mineplugin.org/images/a/a6/Mineplugin_logo_2.3.png',
        title: 'Minecraft 插件百科',
        desc: '一个中文MC插件百科网站',
        link: 'https://mineplugin.org/',
      }
    ],
  },
  {
    title: '基岩版开发文档',
    items: [
      {
        icon: 'https://wiki.mcbe-dev.net/w/images/f/f0/Wiki.svg',
        title: 'MC基岩版开发Wiki',
        link: 'https://wiki.mcbe-dev.net/',
      },
      {
        icon: 'https://wiki.bedrock.dev/assets/images/homepage/wikilogo.png',
        title: 'Bedrock Wik',
        link: 'https://wiki.bedrock.dev',
      },
      {
        icon: 'https://github.com/destruc7i0n/bedrock-dot-dev/blob/master/public/favicon/apple-touch-icon.png?raw=true',
        title: 'bedrock.dev',
        link: 'https://bedrock.dev/',
      },

    ],
  },
  {
    title: '资源站',
    items: [
      {
        icon: 'https://mcversions.net/favicon.ico',
        title: 'MCVersions',
        desc: 'Java版各版本jar下载',
        link: 'https://mcversions.net/',
      },
      {
        icon: 'https://bbk.endyun.ltd/favicon.ico',
        title: 'Minecraft for Android 版本库',
        desc: '安卓基岩版下载',
        link: 'https://bbk.endyun.ltd/',
      },
      {
        icon: 'https://images.mcappx.com/logo/favicon.ico',
        title: 'Minecraft for Windows 版本库',
        desc: 'PC基岩版下载',
        link: 'https://www.mcappx.com/',
      },
      {
        icon: 'https://www.curseforge.com/favicon.ico',
        title: 'CurseForge',
        desc: '老牌MC资源站',
        link: 'https://www.curseforge.com/minecraft',
      },
      {
        icon: 'https://modrinth.com/favicon.ico',
        title: 'Modrinth',
        desc: '一个新兴的Minecraft第三方资源站',
        link: 'https://modrinth.com',
      },
      {
        icon: 'https://www.planetminecraft.com/favicon.ico',
        title: 'PlanetMinecraft',
        desc: '一个比较著名的Minecraft资源网站',
        link: 'https://www.planetminecraft.com/',
      },
      {
        icon: 'https://www.spigotmc.org/favicon.ico',
        title: 'SpigotMc',
        desc: 'SpigotMc的资源板块,有许多插件',
        link: 'https://www.spigotmc.org/resources/',
      },
      {
        icon: 'https://hangar.papermc.io/_nuxt/hangar-logo.DNKyJEtq.svg',
        title: 'Hanger',
        desc: 'papermc提供的插件站',
        link: 'https://hangar.papermc.io/',
      },
      {
        icon: 'https://spongepowered.org/favicon.ico',
        title: 'Sponge Ore',
        desc: '一个Sponge服务端插件的下载站',
        link: 'https://ore.spongepowered.org/',
      },
      {
        icon: 'https://mcpedl.com/favicon.ico',
        title: 'MCPEDL',
        desc: '一个MC基岩版的专门资源网站',
        link: 'https://mcpedl.com/',
      },
      {
        icon: 'https://www.minecraftyard.com/favicon.ico',
        title: 'MinecraftYard',
        desc: '收录了Java版的一些资源',
        link: 'https://www.minecraftyard.com/',
      },
      {
        icon: 'https://www.minecraftmods.com/favicon.ico',
        title: 'Minecraft Mods',
        desc: '收录了一些Java版的模组资源',
        link: 'https://www.minecraftmods.com/',
      },
      {
        icon: 'https://www.minecraftmaps.com/favicon.ico',
        title: 'Minecraft Maps',
        desc: '一个MC游戏地图的专门资源网站',
        link: 'https://www.minecraftmaps.com/',
      },
      {
        icon: 'https://minecraftshader.com/wp-content/uploads/2023/09/sun-favicon-e1695481883503.png',
        title: 'Minecraft Shaders',
        desc: '提供MC的光影包和资源包资源',
        link: 'https://minecraftshader.com/',
      },
      {
        icon: 'https://resourcepack.net/wp-content/themes/rp/assets/images/ico-diamond.png',
        title: 'Resourse Packs for Minecraft',
        desc: '主要提供MC的各种资源包资源',
        link: 'https://resourcepack.net/',
      },
      {
        icon: 'https://littleskin.cn/favicon.png',
        title: 'LittleSkin',
        desc: '国内老牌MC皮肤站',
        link: 'https://littleskin.cn/',
      },
      {
        icon: '',
        title: 'Minecraft Skins',
        desc: '一个英文的MC皮肤资源网站',
        link: 'https://www.minecraftskins.com/',
      },
      {
        icon: 'https://mskins.net/favicon.ico',
        title: 'MSkins',
        desc: '一个英文的MC皮肤资源网站',
        link: 'https://mskins.net/',
      },
      {
        icon: 'https://www.minecraft-schematics.com/favicon.ico',
        title: 'Minecraft Schematics',
        desc: '一个英文的MC投影资源网站',
        link: 'https://www.minecraft-schematics.com/',
      },
      {
        icon: '',
        title: 'Minecraft Sounds',
        desc: '一个国内MC音效下载网站',
        link: 'https://o.xbottle.top/mcsounds/',
      },
    ],
  },
  {
    title: '服务器门户',
    items: [
      {
        icon: '/logo.png',
        title: 'MCJPG组织',
        desc: 'MCJPG组织官网',
        link: 'https://mcjpg.org',
      },
      {
        icon: 'https://toolb.cn/favicon/minecraftservers.org',
        title: 'Minecraft Servers',
        desc: '国外比较著名的服务器资源网站',
        link: 'https://minecraftservers.org/',
      },
      {
        icon: 'https://minecraft-mp.com/favicon.ico',
        title: 'Minecraft Multiplayer',
        desc: '国外比较著名的服务器资源网站',
        link: 'https://minecraft-mp.com/',
      },
      {
        icon: 'https://www.mclists.cn/template/images/favicon.ico',
        title: '我的世界找服网',
        desc: '一个国内的服务器资源网站',
        link: 'https://www.mczfw.cn/',
      },
      {
        icon: 'https://cdn.mczfw.cn/images/logo.png',
        title: 'Minecraft服务器列表',
        desc: '一个国内的服务器资源网站',
        link: 'https://www.mczfw.cn/',
      },
      {
        icon: 'https://www.mcmod.cn/favicon.ico',
        title: 'MCMOD服务器列表',
        desc: 'MCMOD服务器板块',
        link: 'https://play.mcmod.cn/',
      },
    ],
  },
  {
    title: '功能性网站',
    items: [
      {
        icon: 'https://www.chunkbase.com/favicon.ico',
        title: 'Chunk Base',
        desc: '种子查询器、区块查询器等工具网站',
        link: 'https://www.chunkbase.com/',
      },
      {
        icon: 'https://minecraft.tools/favicon.ico',
        title: 'Minecraft Tools',
        desc: '提供各种自定义等工具',
        link: 'https://minecraft.tools/',
      },
      {
        icon: 'https://mctools.org/img/icon.png',
        title: 'Minecraft Server Tools',
        desc: '提供各种自定义服务器的工具',
        link: 'https://mctools.org/',
      },
      {
        icon: 'https://mcsrvstat.us/img/minecraft.png',
        title: 'Minecraft Server Status',
        desc: '网页MC服务器状态检测',
        link: 'https://mcsrvstat.us/',
      },
      {
        icon: 'https://mcstatus.io/favicon.ico',
        title: 'MCS',
        desc: '网页MC服务器状态检测',
        link: 'https://mcstatus.io/',
      },
      {
        icon: 'https://mclo.gs/img/favicon.ico',
        title: 'mclo.gs',
        desc: 'MC服务器日志分析',
        link: 'https://mclo.gs/',
      },
      {
        icon: 'https://redenmc.com/reden_256.png',
        title: 'Reden',
        desc: '世吞等投影文件在线生成',
        link: 'https://redenmc.com/',
      },
      {
        icon: 'https://rebane2001.com/mapartcraft/images/favicon.ico',
        title: 'MapartCraft',
        desc: 'MC像素画生成器,支持投影',
        link: 'https://rebane2001.com/mapartcraft/zh-Hans',
      },
      {
        icon: 'https://www.minecraftpfp.com/PFP/I_Like_Cats__.png',
        title: 'Minecraft PFP',
        desc: '根据正版账号皮肤生成头像',
        link: 'https://www.minecraftpfp.com/',
      },
      {
        icon: 'https://www.gamergeeks.net/favicon.ico',
        title: 'GAMEGEEKS',
        desc: '网页MC指令生成',
        link: 'https://www.gamergeeks.net/',
      },
      {
        icon: 'https://wallpapers.novaskin.me/apple-touch-icon.png',
        title: 'Nova Skin',
        desc: '网页MC皮肤站,可以制作、上传皮肤和下载皮肤的壁纸',
        link: 'https://minecraft.novaskin.me/',
      },
      {
        icon: 'https://skin.endyun.ltd/img/favicon.ico',
        title: 'MC-3D皮肤预览',
        desc: 'MC皮肤查询、3D预览',
        link: 'https://skin.endyun.ltd/',
      },
      {
        icon: 'https://textcraft.net/favicon.ico',
        title: 'Textcraft',
        desc: '生成MC风格的各种艺术字',
        link: 'https://textcraft.net/',
      },
      {
        icon: 'https://chunker.app/favicon.png',
        title: 'Chunker',
        desc: '在线MC跨版本地图转换器,支持JE和BE互转',
        link: 'https://chunker.app/',
      },
      {
        icon: 'https://minecraft-heads.com/themes/mch-v2/assets/images/chest.webp',
        title: 'Minecraft Heads',
        desc: '收集了大量MC装饰性头颅 ',
        link: 'https://www.minecraft-heads.com/',
      },
      {
        icon: 'https://minecraftshapes.com/favicon.ico',
        title: 'Minecraft Shapes',
        desc: '指导在MC搭建规范的图形',
        link: 'https://minecraftshapes.com/',
      },
      {
        icon: 'https://zh-cn.namemc.com/favicon.ico',
        title: 'NameMC',
        desc: '查询正版玩家皮肤、名称、皮肤、UUID等信息',
        link: 'https://zh-cn.namemc.com/',
      },
      {
        icon: 'https://mcuuid.net/favicon.ico',
        title: 'Minecraft UUID',
        desc: '查询正版玩家的UUID等信息',
        link: 'https://mcuuid.net/',
      },
    ],
  },
  {
    title: '模组/光影加载器',
    items: [
      {
        icon: 'https://forums.minecraftforge.net/favicon.ico',
        title: 'Forge',
        desc: '老牌模组加载器官网',
        link: 'https://forums.minecraftforge.net/',
      },
      {
        icon: 'https://neoforged.net/favicon.ico',
        title: 'NeoForge',
        desc: 'Forge在高版本的更佳分支',
        link: 'https://neoforged.net/',
      },
      {
        icon: 'https://fabricmc.net/assets/logo.png',
        title: 'Fabric',
        desc: '新兴热门模组加载器',
        link: 'https://fabricmc.net/',
      },
      {
        icon: 'https://quiltmc.org/favicon/favicon-32x32.png',
        title: 'Quilt',
        desc: 'Fabric下游分支',
        link: 'https://quiltmc.org/en/',
      },
      {
        icon: 'https://www.liteloader.com/favicon.ico',
        title: 'LiteLoader',
        desc: '轻量级模组加载器,较久没更新',
        link: 'http://www.liteloader.com/',
      },
      {
        icon: 'https://www.optifine.net/favicon.ico',
        title: 'Optifine',
        desc: '老牌渲染优化模组高清修复,也可作为光影加载器',
        link: 'https://www.optifine.net',
      },
      {
        icon: 'https://cdn.modrinth.com/data/YL57xq9U/dc558eece920db435f9823ce86de0c4cde89800b.png',
        title: 'Iris Shaders',
        desc: '通过Fabric驱动的Java版高版本光影加载器,与钠兼容',
        link: 'https://irisshaders.net/',
      },
    ],
  },
  {
    title: '启动器',
    items: [
      {
        icon: 'https://www.minecraft.net/etc.clientlibs/minecraft/clientlibs/main/resources/img/Launcher_Icon.png',
        title: 'Minecraft 官方启动器',
        desc: 'MC官方启动器',
        link: 'https://www.minecraft.net/zh-hans/download',
      },
      {
        icon: 'https://hmcl.huangyuhui.net/favicon.ico',
        title: 'HMCL',
        desc: '经典老牌启动器,跨平台',
        link: 'https://hmcl.huangyuhui.net/',
      },
      {
        icon: '/icons/PCL2.png',
        title: 'PCL2',
        desc: '新兴启动器,适于新手',
        link: 'https://afdian.com/p/0164034c016c11ebafcb52540025c377',
      },
      {
        icon: 'https://www.bakaxl.com/favicon.ico',
        title: 'BakaXL',
        desc: '国产二次元启动器.界面美观',
        link: 'https://www.bakaxl.com/',
      },
      {
        icon: 'https://multimc.org/favicon.ico',
        title: 'MultiMC',
        desc: '国外老牌启动器,支持中文',
        link: 'https://multimc.org/',
      },
      {
        icon: 'https://mc.163.com/favicon.ico',
        title: '中国版启动器',
        desc: '中国版官网',
        link: 'https://mc.163.com/',
      },
      {
        icon: 'https://www.lunarclient.com/assets/img/favicon.ico',
        title: 'Lunar Client',
        desc: '热门PVP客户端',
        link: 'https://www.lunarclient.com/',
      },
      {
        icon: 'https://assets.badlion.net/site/favicon.webp',
        title: 'Badlion Client',
        desc: '热门PVP客户端',
        link: 'https://client.badlion.net/zh-CN',
      },
      {
        icon: 'https://labymod.net/page/tpl/assets/images/icons/favicon.ico',
        title: 'Labymod',
        desc: '热门PVP客户端',
        link: 'https://labymod.net/zh_Hans',
      },
      {
        icon: 'https://feathermc.com/favicon/apple-touch-icon.png',
        title: 'FEATHER CLIENT',
        desc: '热门PVP客户端',
        link: 'https://feathermc.com/',
      },
    ],
  },
  {
    title: '实用软件',
    items: [
      {
        icon: '',
        title: 'MC网页版',
        desc: '网页版MC,版本JE1.8.8',
        link: 'https://eaglercraft.ru/',
      },
      {
        icon: 'https://mccteam.github.io/icons/favicon-32x32.png',
        title: 'MCC',
        desc: 'MC命令行客户端',
        link: 'https://mccteam.github.io/l10n/zh-Hans/',
      },
      {
        icon: '/icons/MCA.png',
        title: 'MCA Selector',
        desc: 'MC区块选择器,方便编辑区块,支持中文',
        link: 'https://github.com/Querz/mcaselector',
      },
    ],
  },
]