import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  newPost: any;
  constructor(private postsService: PostsService) {
    this.newPost = {
      title: "",
      url: "",
      body: "",
      date: ""
    }
  }

  ngOnInit(): void {
  }

  getDataForm(): void {
    if (this.newPost.title !== "" && this.newPost.date !== "" && this.newPost.url !== "" && this.newPost.body !== "") {
      let response: string = this.postsService.create(this.newPost);
      console.log(response)
      this.newPost = {
        title: "",
        url: "",
        body: "",
        date: ""
      }
    } else {
      alert('Todos los campos son obligatorios')
    }

  }

}
