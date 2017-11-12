var actions = new Vue({
  el: '#app-placeholder',
  data() {
    return {
        list: [],
        active: ''
    }
  },
  mounted() {
    console.log('list',this.list);
    axios.get(`assets/data.json`)
    .then(response => {
      this.list = response.data.data.list;
      this.active = response.data.data.isActive;
    })
    .catch(e => {
      console.log(e);
    })
  },
  methods: {
    actionClick(name) {
      this.active = name;
    },

    addCategoryAction(category) {
      // var picture_url = $('#photo').find('img');
      // console.log(picture_url);
      var public_id ="david-beckham";

      console.log(category.type);

      // http://res.cloudinary.com/dmlzi2t0t/image/upload/e_art:red_rock:100/bad-mountain.jpg
      // http://res.cloudinary.com/dmlzi2t0t/image/upload/e_art:al_dente:100/bad_mountain
      // http://res.cloudinary.com/dmlzi2t0t/image/upload/e_art:red_rock:100/bad-mountain.jpg
      // http://res.cloudinary.com/dmlzi2t0t/image/upload/filter:e_art:100/bad_mountain'

      // http://res.cloudinary.com/dmlzi2t0t/image/upload/c_scale,fl_relative,g_face,l_fun-winter-hat_wlhznk,w_1.0,y_-0.2/v1510522443/david-beckham.jpg

      var base_url = "http://res.cloudinary.com/dmlzi2t0t/image/upload/";

      switch (category.type) {
        case 'filter':
          var transformation = category.filter +':' + category.value +':' +category.strength +'/'
          var url = base_url+transformation+public_id

          if ($('#photo').is(':empty')){
            //do something
            console.log("empty");
            alert("Pleae add an image to the booth");
          }else{
            $('#photo').empty();
            $("#photo").append('<img src="'+url+'"></img>');
          }

          console.log(url);
          return url;

          break;
        case 'props':

          var prop_transformation = "c_scale,fl_relative,g_face,l_"+category.fun_prop+",w_1.0,y_-0.2/";
          var prop_url = base_url+prop_transformation+public_id;

          if ($('#photo').is(':empty')){
            //do something
            console.log("empty");
            alert("Pleae add an image to the booth");
          }else{
            $('#photo').empty();
            $("#photo").append('<img src="'+prop_url+'"></img>');
          }

          console.log(prop_url);
          return prop_url;


        default:
          console.log("default");
      }

    }
  }
});
