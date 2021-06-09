import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'project1';


  price = [
    {
      'price_plan': 'FREE',
      'amount': '$0',
      'access_plan': [
        {
          'plan': 'Single User',
          'font_style': 'fa fa-check',
          'text_style': ''
        },
        {
          'plan': '5GB Storage',
          'font_style': 'fa fa-check',
          'text_style': '',
        },
        {
          'plan': 'Unlimited Public Projects',
          'font_style': 'fa fa-check',
          'text_style': ''
        },
        {
          'plan': 'Community Access',
          'font_style': 'fa fa-check',
          'text_style': ''
        },
        {
          'plan': 'Unlimited Private Projects',
          'font_style': 'fa fa-times',
          'text_style': 'text-muted'
        },
        {
          'plan': 'Dedicated Phone Support',
          'font_style': 'fa fa-times',
          'text_style': 'text-muted'
        },
        {
          'plan': 'Free Subdomain',
          'font_style': 'fa fa-times',
          'text_style': 'text-muted',
        },
        {
          'plan': 'Monthly Status Reports',
          'font_style': 'fa fa-times',
          'text_style': 'text-muted',
        }

      ]
    },
    {
      'price_plan': 'PLUS',
      'amount': '$9',
      'access_plan': [
        {
          'plan': 'Single User',
          'font_style': 'fa fa-check',
          'text_style': ''
        },
        {
          'plan': '50GB Storage',
          'font_style': 'fa fa-check',
          'text_style': '',
          'font_highlight': 'access'
        },
        {
          'plan': 'Unlimited Public Projects',
          'font_style': 'fa fa-check',
          'text_style': ''
        },
        {
          'plan': 'Community Access',
          'font_style': 'fa fa-check',
          'text_style': ''
        },
        {
          'plan': 'Unlimited Private Projects',
          'font_style': 'fa fa-check',
          'text_style': ''
        },
        {
          'plan': 'Dedicated Phone Support',
          'font_style': 'fa fa-check',
          'text_style': ''
        },
        {
          'plan': 'Free Subdomain',
          'font_style': 'fa fa-check',
          'text_style': ''
        },
        {
          'plan': 'Monthly Status Reports',
          'font_style': 'fa fa-times',
          'text_style': 'text-muted'
        }
      ]
    },
    {
      'price_plan': 'PRO',
      'amount': '$49',
      'access_plan': [
        {
          'plan': 'Unlimited Users',
          'font_style': 'fa fa-check',
          'text_style': '',
          'font_highlight': 'access'
        },
        {
          'plan': '150GB Storage',
          'font_style': 'fa fa-check',
          'text_style': ''
        },
        {
          'plan': 'Unlimited Public Projects',
          'font_style': 'fa fa-check',
          'text_style': ''
        },
        {
          'plan': 'Community Access',
          'font_style': 'fa fa-check',
          'text_style': ''
        },
        {
          'plan': 'Unlimited Private Projects',
          'font_style': 'fa fa-check',
          'text_style': ''
        },
        {
          'plan': 'Dedicated Phone Support',
          'font_style': 'fa fa-check',
          'text_style': ''
        },
        {
          'plan': 'Unlimited Free Subdomain',
          'font_style': 'fa fa-check',
          'text_style': ''
        },
        {
          'plan': 'Monthly Status Reports',
          'font_style': 'fa fa-check',
          'text_style': ''
        }

      ]
    }

  ]

  data = [
    {
      'heading': 'Build',
      'title': 'build processs',
      'description': 'Build was success',
      'color': 'border-success',
      'inStock': true
    },
    {
      'heading': 'Deployement',
      'title': 'Deployement processs',
      'description': 'Deployement was success',
      'color': 'border-success',
      'inStock': false
    },
    {
      'heading': 'Testing',
      'title': 'Testing processs',
      'description': 'Unit Testing was success',
      'color': 'border-danger',
      'inStock': true
    },
    {
      'heading': 'Azure Deploy',
      'title': 'Azure Deploy processs',
      'description': 'Azure Deploy was success',
      'color': 'border-primary',
      'inStock': true
    },
  ]
}
