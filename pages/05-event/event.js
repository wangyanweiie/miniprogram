
Page({
  data:{
    movies: ['大话西游','澳门风云','唐人街探案','肖申克的救赎']
  },
  clickBtn(event){
    console.log("Button点击");
    console.log(event);
  },
  innerBtn(event){
    console.log("inner点击");
    console.log(event);
  },
  wrapBtn(event){
    console.log("wrap点击");
    console.log(event);
  },
  moviesClick(event){
    console.log(event)
  }
})