<template lang="pug">
  .container
    .group.group__works-list(name="works")
      form.form__works( v-if="addWork" @submit.prevent="addWorks")
        h3.form__title Добавление работы
        .form__block
          .form__column_work
            .upload__image
                .avatar__image_work(:style="{backgroundImage:`url(${imagePreview})`}")
                    img(:src="`url(${imagePreview})`" hidden=true)
                    input.feed__add-btn_work(type='file' ref="file" @change="previewImage" )
                    h5.title__upload-image_work Перетащите или загрузите для загрузки изображения
                    .upload__btn_work Загрузить
          .form__column
            .form__row
              h6.input-title.work-edit__name Название
              input.input__item.input__work--name(value="" v-model='work.title'
                  :class="{input_error: $v.work.title.$error||errorTitle}"
                  @blur="$v.work.title.$touch()"
                  @focus="errorTitle=false")
              .color__span(v-if="$v.work.title.$error||errorTitle")  Заполните название
            .form__row
              h6.input-title.work__link Ссылка
              input.input__item.input__work--link(value="" v-model='work.link'
                  :class="{input_error: $v.work.link.$error||errorLink}"
                  @blur="$v.work.link.$touch()"
                  @focus="errorLink=false")
              .color__span(v-if="$v.work.link.$error||errorLink")  Заполните ссылку
            .form__row
              h6.input-title.info__desc Описание
              textarea.input__item.input__work--desc(
                  v-model='work.description'
                  :class="{input_error: $v.work.description.$error||errorDescription}"
                  @blur="$v.work.description.$touch()"
                  @focus="errorDescription=false")
              .color__span(v-if="$v.work.description.$error||errorDescription")  Заполните описание
            .form__row
              h6.input-title.work__tags Добавление тэга
              input.input__item.input__work--tags(
                  v-model='work.techs'
                  :class="{input_error: $v.work.techs.$error||errorTech}"
                  @blur="$v.work.techs.$touch()"
                  @focus="errorTech=false")
              .color__span(v-if="$v.work.techs.$error||errorTech")  Заполните тэг
            .form__row.div_tag
              .div_tag(v-for="teg in tegs")
                     button.btn__tag(@click="delTech(teg)") {{teg}}

            .form__row.control-btns
              button.control-btn.new__reset(@click="addWork=false") Отмена
              button.control-btn.new__save(type="submit") СОХРАНИТЬ
      ul.group__list
          li.group__item.item__add-btn
            .add-btn__container
                button.items__add-btn--icon(@click="addWork=true") +
                button.items__add-btn--text(@click="addWork=true") Добавить работу
          workItem(
              v-for="work in works"
              :key="work.id"
              :work="work")

</template>

<script>
  import workItem from "./workItem";
  import PictureInput from 'vue-picture-input'
  import {required} from "vuelidate/lib/validators";

  export default {
      comments:{
          PictureInput

      },
      data() {
          return {
              errorTitle:false,
              errorLink:false,
              errorTech:false,
              errorDescription:false,
              imagePreview:null,
              showPreview:false,
              addWork:false,
              work: {
                  title: '',
                  techs: '',
                  photo: null,
                  link: '',
                  description: '',
              },
              file:'',
              editedWork: { ...this.work }
          };
      },
      validations: {
          work: {
              title: {required},
              techs: {required},
              link: {required},
              description: {required},
          }
      },
      computed:{

          tegs: {
              get: function () {

                  if (this.work.techs.length>0)
                  {
                      return (this.work.techs).split(',')
                  }
              },
              set: function (newValue) {
                  this.work.techs = newValue.join(',');
              }
          },
          works(){
              return this.$store.state.works.works
          },
      },
      created () {
          this.$store.dispatch('works/getWorks');
      },
      methods:{
          previewImage(event) {
              let image_ = event.target;
              if (image_.files && image_.files[0]) {
                  let reader = new FileReader();
                  try {
                      reader.onload = (e) => {
                          this.imagePreview = e.target.result;
                          this.showPreview = true;
                      }
                  }catch (e) { console.log(444)
                  }
                  reader.readAsDataURL(image_.files[0]);
              }
          },
          async addWorks(event){
              if(this.work.title.length===0 ) {
                      this.errorTitle=true;
                      return
              }
              else{
                      this.errorTitle=false;
              }
              if(this.work.link.length===0 ) {
                  this.errorLink=true;
                  return
              }
              else{
                  this.errorLink=false;
              }
              if(this.work.techs.length===0) {
                  this.errorTech=true;
                  return
              }
              else{
                  this.errorTech=false;
              }
              if(this.work.description.length===0 ) {

                  this.errorDescription=true;
                  return
              }
              else{
                  this.errorDescription=false;
              }
              this.file = this.$refs.file.files[0];
              const formData=new FormData();
              formData.append("title",this.work.title);
              formData.append("techs",this.work.techs);
              formData.append("photo", this.file);
              formData.append("max:", "1500kb");
              formData.append("link",this.work.link);
              formData.append("description",this.work.description);

              try {
                  await this.$store.dispatch('works/createWorks', formData);
              }
              catch (e) {
              }
              this.addWork=false;
              this.work.title='';
              this.work.techs= '';
              this.work.photo=null;
              this.work.link= '';
              this.work.description= ''
          },
          delTech(teg){
              this.tegs = this.tegs.filter(item => item !== teg);
          }
      },
      components: {
          workItem,
      },
    
  }
</script>

<style lang="postcss" scoped>
    .avatar__image_work {
        width: 100%;
        height: 100%;
        //border-radius: 50%;
    //display: none;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }
    .feed__add-btn_work {
        width: 100%;
        font-size: 16px;
        color: #008bff;
        font-weight: 600;
        border: none;
        cursor: pointer;
        height: 100%;
        opacity: 0;


    &:hover {
         text-decoration-skip: 5px;
         text-decoration-line: underline;
     }
    }

    .form__column_work {
        margin-right: 30px;

    &:last-child {
         margin-right: 0px;
         min-width: 350px;
         flex: 1;
     }
    }

    .title__upload-image_work {
        width: 220px;
        font-size: 16px;
        line-height: 34px;
        text-align: center;
        color: rgba(65, 76, 99, 0.5);
        font-weight: 600;
        margin: -200px 0 10px 25%;
    }
    .upload__btn_work {
        padding: 17px 48px;
        background: linear-gradient(90deg, #1e51dd 10%, #3f35cb 50%);
        font-size: 16px;
        color: #ffffff;
        text-align: center;
        font-weight: 700;
        border-radius: 30px 30px;
        cursor: pointer;
        width: 50%;



        border: none;

        height: 10%;
        //opacity: 0.1;

        margin: 0 0 0 12.5%;
    }
    .div_tag{
        display: flex;
    }
</style>