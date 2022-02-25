import { Component, OnInit, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'component-photos',
  templateUrl: './photos-page.component.html',
  styleUrls: ['./photos-page.component.css']
})

export class PhotosComponent implements OnInit {

  data: any =

    [
      {
        "PhotoName": "Shining bright like an orange",
        "PhotoDescription": "Based on my usage, my footwear gets dirty every 3-4 months and I make sure to spend a weekend washing them. Why I do this? I believe, if you take care of your belongings, they'll take care of you longer + there are other benefits of cleaning your footwear too.",
        "PhotoImage": "../assets/photos/2021-02-02-1.jpeg",
        "PhotoLocation": "Bengaluru, India",
        "PhotoDateTaken": "October 31, 2020",
        "PhotoDateUploaded": "January 18, 2022",
        "PhotoAlbums": "Minimal"
      },
      {
        "PhotoName": "Bipolar",
        "PhotoDescription": "Airport architecture has always fascinated me. Every international airport is different than the other and has its own personality. This one's a cropped photo of Bengaluru's international airport roof.",
        "PhotoImage": "../assets/photos/2020-10-31-1.jpeg",
        "PhotoLocation": "Bengaluru, India",
        "PhotoDateTaken": "October 31, 2020",
        "PhotoDateUploaded": "January 18, 2022",
        "PhotoAlbums": "Minimal"
      },
      {
        "PhotoName": "Paper car",
        "PhotoDescription": "Saw this photo frame of this beautiful car in one of the WeWork offices in Bangalore.",
        "PhotoImage": "../assets/photos/2022-01-10-1.jpeg",
        "PhotoLocation": "Bengaluru, India",
        "PhotoDateTaken": "January 10, 2022",
        "PhotoDateUploaded": "January 18, 2022",
        "PhotoAlbums": "Minimal"
      },
      {
        "PhotoName": "Letters on grass",
        "PhotoDescription": "I love taking my kindle downstairs of my apartment, into the lawn. It gets very soothing sunlight during winters. Nothing beats the feeling of bathing in the sun and reading a book or doing just what you like.",
        "PhotoImage": "../assets/photos/2020-10-15-1.jpeg",
        "PhotoLocation": "Bengaluru, India",
        "PhotoDateTaken": "October 15, 2020",
        "PhotoDateUploaded": "January 14, 2022",
        "PhotoAlbums": "Minimal"
      },
      {
        "PhotoName": "Macro web",
        "PhotoDescription": "Zoomed in photo of the emoji shortcut key on iPad's keyboard",
        "PhotoImage": "../assets/photos/2020-10-26-1.jpeg",
        "PhotoLocation": "Bengaluru, India",
        "PhotoDateTaken": "October 26, 2020",
        "PhotoDateUploaded": "January 3, 2022",
        "PhotoAlbums": "Minimal"
      },
      {
        "PhotoName": "Celebrating 1 year with this!",
        "PhotoDescription": "I've always been interested in cars. I started drawing cars when I was in school. It was the sole reason I took automotive engineering as a major in college. But the way it was taught in college, I lost interest in theories, but my love for automotive design remained. We got this car last year and celebrating a year with it. This Jeep Compass has been and always will be a constant reminder of my love for automotive design.",
        "PhotoImage": "../assets/photos/2020-10-23-1.jpeg",
        "PhotoLocation": "Bengaluru, India",
        "PhotoDateTaken": "October 23, 2020",
        "PhotoDateUploaded": "December 30, 2021",
        "PhotoAlbums": "Personal"
      },
      {
        "PhotoName": "Dark side",
        "PhotoDescription": "Click pictures from different perspectives. Sometimes the image looks great from certain angles that we're not used to.",
        "PhotoImage": "../assets/photos/2020-10-24-1.jpeg",
        "PhotoLocation": "Bengaluru, India",
        "PhotoDateTaken": "October 24, 2020",
        "PhotoDateUploaded": "December 17, 2021",
        "PhotoAlbums": "Minimal"
      },
      {
        "PhotoName": "Grass is greener on the other side",
        "PhotoDescription": "Taken during an evening stroll at my friend's place.",
        "PhotoImage": "../assets/photos/2021-12-14-1.jpeg",
        "PhotoLocation": "Bengaluru, India",
        "PhotoDateTaken": "December 14, 2021",
        "PhotoDateUploaded": "December 14, 2021",
        "PhotoAlbums": "Minimal"
      },
      {
        "PhotoName": "Portal",
        "PhotoDescription": "This shot wasn't planned. While driving to our resort, I looked up and immediately identified this minimal frame. Shot quickly on .5x from my iPhone.",
        "PhotoImage": "../assets/photos/2021-11-10-1.jpeg",
        "PhotoLocation": "Jim Corbett, India",
        "PhotoDateTaken": "November 10, 2021",
        "PhotoDateUploaded": "November 25, 2021",
        "PhotoAlbums": "Minimal"
      },
      {
        "PhotoName": "Cornerstone",
        "PhotoDescription": "Took on a narrow corridor that led to a kitchen in the palace. One theme about old architecture that I always love is that the narrow & dark paths lead to a brighter place.",
        "PhotoImage": "../assets/photos/2018-10-25-1.jpeg",
        "PhotoLocation": "Palace of Pena, Portugal",
        "PhotoDateTaken": "October 25, 2018",
        "PhotoDateUploaded": "November 25, 2021",
        "PhotoAlbums": "Minimal"
      },
      {
        "PhotoName": "Sun is yellow",
        "PhotoDescription": "Have always found sunlight an amazing source of light that changes pictures dramatically. How your pictures look when it's 7 AM vs. how they look when the sun is right on top of us are completely different and can sometimes make a world of a difference in your photos. Use sunlight to your benefit.",
        "PhotoImage": "../assets/photos/2021-02-13-1.jpeg",
        "PhotoLocation": "Bengaluru, India",
        "PhotoDateTaken": "February 13, 2021",
        "PhotoDateUploaded": "November 25, 2021",
        "PhotoAlbums": "Minimal"
      },
      {
        "PhotoName": "Praise thy lord",
        "PhotoDescription": "Petrvs statue, near Almudena Cathedral.",
        "PhotoImage": "../assets/photos/2018-01-27-1.jpeg",
        "PhotoLocation": "Madrid, Spain",
        "PhotoDateTaken": "January 27, 2018",
        "PhotoDateUploaded": "November 25, 2021",
        "PhotoAlbums": "Minimal"
      },
      {
        "PhotoName": "Traingles & curves",
        "PhotoDescription": "I've always found the airplane's fin shot a classic. No matter when and where you take it, it always looks great.",
        "PhotoImage": "../assets/photos/2021-11-15-1.jpeg",
        "PhotoLocation": "IGI Airport, New Delhi",
        "PhotoDateTaken": "November 15, 2021",
        "PhotoDateUploaded": "November 25, 2021",
        "PhotoAlbums": "Minimal"
      },
      {
        "PhotoName": "Rob the builder",
        "PhotoDescription": "On my way to breakfast, spotted this castle getting repaired - resembled the scene from Mission Impossible 3.",
        "PhotoImage": "../assets/photos/2018-10-30-1.jpeg",
        "PhotoLocation": "Lisbon, Portugal",
        "PhotoDateTaken": "October 30, 2018",
        "PhotoDateUploaded": "November 25, 2021",
        "PhotoAlbums": "Minimal"
      },
    ]

  constructor() { }
  ngOnInit(): void { }
}