<template>
  <div id="gitalk-container"></div>
</template>

<script>
  export default {
    name: "blog-comments",
    mounted() {
      const commentConfig = {
        // 是否开启
        enable: true,
        // clientID
        clientID: "c53de9cc581356de3271",
        // clientSecret
        clientSecret: "e233c1f4878512622e31e27e86f17d53a09a0ab4",
        // 评论项目名
        repo: 'blog-comments',
        owner: 'nans',
        admin: ['nans'],
        githubID:'nans',
        id: decodeURI(window.location.pathname),
        language:'zh-CN',
        distractionFreeMode: true,
        // proxy: 'https://cors-anywhere.azm.workers.dev/https://github.com/login/oauth/access_token'  //避免跨域
        proxy: 'https://netnr-proxy.cloudno.de/https://github.com/login/oauth/access_token'
        
      };
      const gitalk = new Gitalk(commentConfig);
      gitalk.render("gitalk-container");
    },
  };
</script>