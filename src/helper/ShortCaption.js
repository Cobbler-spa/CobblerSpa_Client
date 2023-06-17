const shortCaption = (desc)=>{
    let str= desc;
    if(desc.length > 25){
      str = str.substr(0,40)+ " ...";
    }

    return str;
  }

  export default shortCaption