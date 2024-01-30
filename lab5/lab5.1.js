
class APICaller {
    constructor(baseUrl) {
      this.baseUrl = baseUrl;
    }
  
    async get(endpoint) {
      try {
        const response = await fetch(`${this.baseUrl}/${endpoint}`);
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error:', error);
      }
    }
  }

  class Comment {
    constructor(apiCaller) {
      this.apiCaller = apiCaller;
    }
  
    async getAll() {
      return this.apiCaller.get('comments');
    }
  
    async getOne(commentId) {
      return this.apiCaller.get(`comments/${commentId}`);
    }
  }
  
  class Post {
    constructor(apiCaller) {
      this.apiCaller = apiCaller;
    }
  
    async getAll() {
      return this.apiCaller.get('posts');
    }
  
    async getOne(postId) {
      return this.apiCaller.get(`posts/${postId}`);
    }
  }
  
  
  const apiCaller = new APICaller('http://localhost:3000');
  const commentAPI = new Comment(apiCaller);
  const postAPI = new Post(apiCaller);
  
  
  commentAPI.getAll().then(comments => console.log('Tất cả bình luận:', comments));
  commentAPI.getOne(1).then(comment => console.log('Bình luận ID số 1:', comment));
  
  postAPI.getAll().then(posts => console.log('Tất cả bài đăng:', posts));
  postAPI.getOne(1).then(post => console.log('Bài đăng ID số 1:', post));
