async function typeFilter(posts, type) {
    if (type !== '-') {
        console.log('VOY A FILTRAR ESTO');
        console.log(posts);
        posts = posts.filter((p) => p.type === type);
      }
      console.log('FILTRADO');
      console.log(posts);
    return posts;
  }
  
  export default {
    typeFilter,
  };
  