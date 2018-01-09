import { async, ComponentFixture, TestBed, inject  } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule, Router, RouterOutlet  } from '@angular/router';
import {  HttpModule,
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';




class MockRouter {
    navigate(url: string) { return url; }
}
class MockCategoryListComponent {

}




