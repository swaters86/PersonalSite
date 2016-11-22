var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  var data = {
    'siteTitle': 'StevenWaters.com - The homepage of Steven Waters, a web developer living in Tampa, Fl',
    'skills':
    {
      'skillsSet1': ['HTML5', 'CSS3', 'Basic JavaScript (ES6)', 'Responsive Design', 'Bootstrap 3', 'Wordpress', 'Node.js', 'Express.js', 'SASS', 'Git', 'NPM', 'Jade', 'Java', 'C++', 'Visual Studio Code'],
      'skillsSet2': ['HTML4', 'CSS2', 'Basic JavaScript (ES5)', 'Basic PHP', 'Basic C#', 'ASP.net', 'T-SQL Scripting', 'Application Support', 'Documentation', 'Presentations', 'SDLC', 'SEO', 'Graphic Design', 'Illustrator', 'Photoshop'],
      'skillsSet3': ['ES6', 'React', 'Angular.js', 'Babel', 'Gulp', 'Web Pack', 'Web Assembly', 'CSS3 Animations', 'Filmmaking']
    },
    'codeItems': [
      {
        'title': 'Dateline Formatter',
        'description': 'This was a script I wrote for NEWSCYCLE Digital solution. The purpose of it was to format date values for several database records in a certain format.',
        'link': 'https://gist.github.com/swaters86/da10dad981a5f9911c58',
        'linkTitle': 'Code Repository Page for a script that can reformat datetime values in a database'
      },
      {
        'title': 'TinyPass Paywall Integration',
        'description': "This is a PHP integration I created for a NEWSCYCLE Solution's customer. The purpose of this integration was to implement a paywall solution using a third-party company called TinyPass REST API. The PHP in this integration authenticates users by interacting with TinyPass' REST API.",
        'link': 'https://github.com/swaters86/TinyPass-NCS-Integration',
        'linkTitle': 'Code Repository for a PHP Integration'
      },
      {
        'title': 'Replication Batch Script',
        'description': 'This was one of my most advance batch scripts. Unfortunately, I had to keep the gist private. If you would like to see review, then please feel free to reach out to me by emailing me at swaters86@gmail.com. The purpose of this script was to replicate files across several file systems for serveral sites. The script would first look at a txt file  and cycle through it to get a 2 letter site code for the site which it will then use to determine which directory the files should be replicated to. ',
        'link': 'https://gist.github.com/swaters86/b6c818af1587ac4b5628',
        'linkTitle': 'Code Repository Page for Batch Script'
      },
      {
        'title': 'Employee Record C++ Program',
        'description': 'This was the program I had to program in C++ when I was taking classes there. The program excepts information such as first name, last name, age, etc for an employee and creates an object out of that information by using a constructor function. The object is then used to print out the information of the employee for the end user.',
        'link': 'https://gist.github.com/swaters86/2f6b092f77cc95b59b0e',
        'linkTitle': 'Code Repository for a C++ program'
      },
      {
        'title': 'CCE Cleanup Stored Procedure',
        'description': 'This is a stored procedure (SP) I wrote for deleting certain type of records in a database. The (SP) accepts 3 arguments, one for site code, one for the from datedata and another for the to date.',
        'link': 'https://gist.github.com/swaters86/fab20b8e64a2b6e52a86',
        'linkTitle': 'Code Respository Page for Stored Procedure'
      },
      {
        'title': 'Rock,Paper,Scissors Java App',
        'description': 'This is a Java program I wrote for school. The program is a command-line based program and it allows you to play Rock, Paper, Scissors against a computer. ',
        'link': 'https://gist.github.com/swaters86/210e0013f454b1c6ee48',
        'linkTitle': 'Code Repository for a Java program'
      },
      {
        'title': 'IncreName',
        'description': 'This is a simple command-line program I wrote in C# at Sunview Software. The purpose of the program was to fix folder names an application I Supported there.',
        'link': 'https://github.com/swaters86/IncreName/tree/master/IncreName',
        'linkTitle': 'Code Repository for a C# program'
      }
    ],
    'portfolioItems': [
      {
        'imgSrc': '../../images/portfolio_images/NCS_Portal.png',
        'imgAlt': 'A screenshot NEWSCYCLE Digital Salesforce Portal',
        'captionTitle': 'NEWSCYCLE Digital Salesforce Portal',
        'url': 'http://swaters86.github.io/portfolio/NCSPortal/index.html',
        'captionText': 'While working at NEWSCYCLE Solutions, I was asked to design a portal for our Salesforce site. I was asked to design one because of my expertise in HTML, CSS, and JavaScript'
      },
      {
        'imgSrc': '../../images/portfolio_images/Inline_Style_Printer.png',
        'imgAlt': 'A screenshot of a Node.js app that prints out incline styles that have been applied to elements on a page',
        'url': 'http://inlinestyleprinter.azurewebsites.net/',
        'captionTitle': 'Inline Style Printer App',
        'captionText': 'This is a just a simple Node.js app I developed. It scrapes pages using the Cheerio library and print thems out on the page.'

      },
      {
        'imgSrc': '../../images/portfolio_images/Bespoke%26Co.png',
        'imgAlt': 'A screenshot of Bespoke & Co"s website from about 4 years ago',
        'url': 'http://bespokeandcofl.azurewebsites.net/',
        'captionTitle': 'Bespoke & Co',
        'captionText': 'This is an ASP.net site that I designed and developed from scratch using HTML, CSS, JavaScript, and jQuery. Note: this is from circa 2007-2009 so the design is a bit outdated and not responsive.'
      }, {
        'imgSrc': '../../images/portfolio_images/WoodlandWonders.png',
        'imgAlt': 'Screenshot of WoodlandWonders.org website - Woodland Wonders is non-profit organization for rehabilating injured and orphaned wildlife.',
        'url': 'http://woodlandwonders.org/',
        'captionTitle': 'Woodland Wonders',
        'captionText': 'This is a site I designed for an non-profit organization that my parents run for rehabilitating injured and orphaned wildlife. This site is actually based on a custom Wordpress theme that I developed called Bare Bones.'
      }, {
        'imgSrc': '../../images/portfolio_images/AlphaTerra.png',
        'imgAlt': 'Screenshot of AlphaTerra"s former website',
        'url': 'http://alphaterra.azurewebsites.net/',
        'captionTitle': 'AlphaTerra',
        'captionText': 'This is another ASP.net site that I designed from scratch using HTML, CSS, and JavaScript. Again, it"s another old school site but it shows my creative side, at least :)'
      }, {
        'imgSrc': '../../images/portfolio_images/ICS.png',
        'imgAlt': 'Screenshot of Interactive Contact Solutions former website.',
        'url': 'http://interactivecontactsolutions.azurewebsites.net/',
        'captionTitle': 'Interactive Contact Solutions',
        'captionText': 'This is another site that I helped developed at Rapid Technology Solutions. I didn"t design it but I was in charge of coding a lot of the HTML, CSS, and JavaScript and developing the web forms on see. The web forms won"t because I haven"t configured a SMTP server in Azure yet.'
      }, {
        'imgSrc': '../../images/portfolio_images/DCS.png',
        'imgAlt': 'Screenshot of Diabetic Charitable Services former website',
        'url': 'http://diabeticservice.azurewebsites.net/',
        'captionTitle': 'Diabetic Charitable Services',
        'captionText': 'This is a static HTML, CSS, and JavaScript site I developed at Rapid Technology Solutions. This was actually a site I had to pump out in 8 hours because it was for a time-sensitive charity race promotion.'
      }
    ]

  }

  // Passing in data object into the JADE view the index page
  res.render('index', data)
})

module.exports = router
