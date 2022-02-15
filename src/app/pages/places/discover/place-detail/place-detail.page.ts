import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  constructor(private router: Router, private navCtrl: NavController) {}

  ngOnInit() {}

  onBookPlace() {
    // LEARNINGI
    // this gives us wrong animation, looks like its adding another tab when going back, not removing one
    // ionic is treating navigation that it does not know about as forward by default
    // we should use navcontroller so we can tell it its backward nav
    // this.router.navigateByUrl('/tabs/discover');

    // with this it plays correct animation when navigating (under the hood it uses angular navigation with some extra metadata)
    this.navCtrl.navigateBack('/tabs/discover');
    // this.navCtrl.navigateForward('/tabs/discover')

    // or we can use pop to pop last page off the stack and navigate back
    this.navCtrl.pop();
  }
}
