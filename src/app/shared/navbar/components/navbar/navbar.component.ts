import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] = [];
  menuStyle: any = {};

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/',
      },
      {
        label: 'About Us',
        icon: 'pi pi-info',
        routerLink: '/about-us',
      },
      {
        label: 'Services',
        icon: 'pi pi-cog',
        routerLink: '/services',
      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope',
        routerLink: '/contact',
      },
    ];
  }

  scrolled: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    this.scrolled = scrollPosition > 0;
  }

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  toggleMenu1(event: Event) {
    const buttonRect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    this.menuStyle = {
      top: `${buttonRect.bottom + window.scrollY}px`,
      left: `${buttonRect.left + window.scrollX}px`,
    };
  }
}
