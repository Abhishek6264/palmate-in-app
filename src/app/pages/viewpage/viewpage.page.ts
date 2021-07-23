import { Component, OnInit } from '@angular/core';
import { UserfireService } from 'src/app/services/userfire.service';

export class USER {
  $key: string;
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-viewpage',
  templateUrl: './viewpage.page.html',
  styleUrls: ['./viewpage.page.scss'],
})
export class ViewpagePage implements OnInit {

  userDetails: USER[];
  constructor(
    private userfireService: UserfireService
    ) { }


  ngOnInit() {
    this.userfireService.getUsers().subscribe((res) => {
      this.userDetails = res.map((t) => ({
          id: t.payload.doc.id,
          ...t.payload.doc.data() as USER
        }));
    });
  }

  userList() {
    this.userfireService.getUsers()
    .subscribe((data) => {
      console.log(data);
    });
  }
}
