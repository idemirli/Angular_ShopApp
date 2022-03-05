import { Component, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/model/category.model';
import { CategoryRepository } from 'src/app/model/category.repository';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  public selectedCategory?:Category;
  @Output() category= new EventEmitter<Category>();   //Alt componentten üst component'e parametre geçişi
  constructor(private categoryRepository:CategoryRepository) { }

  ngOnInit(): void {
  }

  changeCategory(newCategory?:Category){
    this.selectedCategory=newCategory;
    this.category.emit(newCategory);
   }

   get categories() : Category[]{
    return this.categoryRepository.getCategories();
  }

}
