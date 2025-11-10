export const sampleNotes = [
  {
    id: '202511100005',
    title: 'Local Setup Guide',
    tags: ['tutorial', 'setup', 'development'],
    group: 'tutorials',
    linkedNotes: [],
    content: {
      abstract: 'Learn how to set up and run your Zettelkasten Math Journal on your local computer, independent of Replit. This tutorial covers downloading the project, installing dependencies, running the development server, and customizing your personal knowledge base.',
      sections: [
        {
          title: 'Prerequisites',
          text: `Before you begin, make sure you have these installed on your computer:
          
<strong>Node.js</strong> (version 18 or higher) - Download from <a href="https://nodejs.org/" target="_blank">nodejs.org</a>. Check if installed by typing <code>node --version</code> in your terminal.

<strong>Python</strong> (version 3.8 or higher) - Optional, only needed if using Flask backend. Download from <a href="https://www.python.org/downloads/" target="_blank">python.org</a>. Check with <code>python --version</code>.

<strong>Git</strong> (recommended for version control) - Download from <a href="https://git-scm.com/" target="_blank">git-scm.com</a>. Check with <code>git --version</code>.`
        },
        {
          title: 'Download Your Project',
          text: `<strong>Option A: Download as ZIP</strong>
1. In your Replit project, click the three dots menu (⋮) in the file tree
2. Select "Download as ZIP"
3. Extract the ZIP file to a folder on your computer

<strong>Option B: Clone via Git</strong>
<pre><code>git clone &lt;your-repository-url&gt;
cd &lt;project-folder&gt;</code></pre>`
        },
        {
          title: 'Install Dependencies',
          text: `Open a terminal in your project folder and run:

<strong>Install Frontend Dependencies:</strong>
<pre><code>cd client
npm install
cd ..</code></pre>

<strong>Install Backend Dependencies (Optional):</strong>
<pre><code>pip install flask flask-cors
# or if using pip3:
pip3 install flask flask-cors</code></pre>`
        },
        {
          title: 'Run the Development Server',
          text: `<strong>Option A: Frontend Only (Recommended)</strong>

This runs just the React frontend with Vite's built-in development server:

<pre><code>cd client
npm run dev</code></pre>

Then open your browser to: <code>http://localhost:5000</code>

<strong>Option B: Full Stack (Frontend + Flask Backend)</strong>

Terminal 1 - Start Flask:
<pre><code>python server.py</code></pre>

Terminal 2 - Start Vite:
<pre><code>cd client
npm run dev</code></pre>

Then open your browser to: <code>http://localhost:5000</code>`
        },
        {
          title: 'Making Changes',
          text: `All your content is stored in <code>client/src/data/sampleNotes.js</code>. To add or edit notes:

1. Open <code>client/src/data/sampleNotes.js</code> in your favorite code editor
2. Add new notes to the <code>sampleNotes</code> array following the existing format
3. The page will automatically refresh to show your changes

<strong>Note Structure Example:</strong>
<pre><code>{
  id: '202512150001',
  title: 'Your Note Title',
  group: 'prototypes', // or 'tutorials', 'howto', 'explanations', 'reference'
  tags: ['tag1', 'tag2'],
  content: { ... },
  linkedNotes: ['202511100001'], // IDs of connected notes
  citations: ['citation-key'] // Reference keys from bibliography
}</code></pre>`
        },
        {
          title: 'Building for Production',
          text: `When you're ready to create a static website you can host anywhere:

<pre><code>cd client
npm run build</code></pre>

This creates a <code>dist</code> folder with your complete website. You can:
• Upload it to any web hosting service (Netlify, Vercel, GitHub Pages, etc.)
• Serve it locally with: <code>npx serve dist</code>`
        },
        {
          title: 'Customization',
          text: `<strong>Change Fonts:</strong>
Edit <code>client/src/index.css</code> - look for the <code>:root</code> section at the top

<strong>Modify Colors:</strong>
<pre><code>--color-primary: #14b5ff;    /* Main blue color */
--color-link: #7652f5;       /* Purple links */
--color-math: #00f5db;       /* Math/code color */</code></pre>

<strong>Add Your Own Images:</strong>
Replace files in <code>client/public/assets/</code>:
• <code>logo.png</code> - Header logo
• <code>favicon.ico</code> - Browser tab icon
• <code>wisp-bg.jpg</code> - Background image
• <code>orb.png</code> - Footer decoration`
        },
        {
          title: 'Troubleshooting',
          text: `<strong>"npm: command not found"</strong>
Install Node.js from <a href="https://nodejs.org/" target="_blank">nodejs.org</a>

<strong>Port 5000 already in use</strong>
Change the port in <code>client/vite.config.js</code>:
<pre><code>server: {
  port: 3000, // Change this number
}</code></pre>

<strong>Changes not appearing</strong>
Make sure the development server is running (<code>npm run dev</code>)
Try clearing your browser cache (Ctrl+Shift+R or Cmd+Shift+R)

<strong>MathJax not rendering</strong>
MathJax loads from a CDN. Make sure you have internet connection
Check that the MathJax script is in <code>client/index.html</code>`
        },
        {
          title: 'Backing Up Your Work',
          text: `Your notes are in <code>client/src/data/sampleNotes.js</code> - this is the most important file to backup!

<strong>Recommended backup methods:</strong>
1. Copy the entire project folder to a cloud drive (Google Drive, Dropbox, etc.)
2. Use Git for version control: <code>git add .</code> and <code>git commit -m "Save my notes"</code>
3. Export <code>sampleNotes.js</code> regularly to a backup location`
        },
        {
          title: 'Next Steps',
          text: `• <strong>Add more notes</strong> by editing <code>client/src/data/sampleNotes.js</code>
• <strong>Organize notes</strong> into the 5 Diataxis categories (Prototypes, Tutorials, How-to Guides, Explanations, Reference)
• <strong>Create connections</strong> by linking notes together using the <code>linkedNotes</code> array
• <strong>View your knowledge graph</strong> by clicking "Graph" in the header to see how everything connects

Enjoy your personal mathematical knowledge garden! 📚✨`
        }
      ]
    },
    citations: [],
    hasGraph: false,
    aiWarning: true
  },
  {
    id: '202511100001',
    title: 'Introduction to Topology',
    tags: ['topology', 'mathematics', 'foundations'],
    group: 'prototypes',
    linkedNotes: ['202511100002', '202511100003'],
    content: {
      abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      sections: [
        {
          title: 'Fundamental Concepts',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras porttitor purus ac tortor commodo, vel scelerisque nisl consectetur.',
          math: `\\text{A topological space is a pair } (X, \\tau) \\text{ where } X \\text{ is a set and } \\tau \\text{ is a collection of subsets of } X \\text{ satisfying:}
          
\\begin{aligned}
1. &\\quad \\emptyset \\in \\tau \\text{ and } X \\in \\tau \\\\
2. &\\quad \\text{The union of any collection of sets in } \\tau \\text{ is in } \\tau \\\\
3. &\\quad \\text{The intersection of any finite collection of sets in } \\tau \\text{ is in } \\tau
\\end{aligned}`
        },
        {
          title: 'Example',
          text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          math: `\\text{Consider } X = \\{a, b, c\\} \\text{ with } \\tau = \\{\\emptyset, \\{a\\}, \\{a,b\\}, X\\}`
        }
      ]
    },
    citations: ['luhmann1984', 'munkres2000'],
    hasGraph: false,
    aiWarning: true
  },
  {
    id: '202511100002',
    title: 'Metric Spaces',
    tags: ['analysis', 'metric-spaces', 'topology'],
    group: 'prototypes',
    linkedNotes: ['202511100001', '202511100004'],
    content: {
      abstract: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      sections: [
        {
          title: 'Definition',
          text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          math: `\\text{A metric space is a pair } (X, d) \\text{ where } X \\text{ is a set and } d: X \\times X \\to \\mathbb{R} \\text{ satisfies:}

\\begin{aligned}
1. &\\quad d(x, y) \\geq 0 \\text{ for all } x, y \\in X \\\\
2. &\\quad d(x, y) = 0 \\iff x = y \\\\
3. &\\quad d(x, y) = d(y, x) \\text{ (symmetry)} \\\\
4. &\\quad d(x, z) \\leq d(x, y) + d(y, z) \\text{ (triangle inequality)}
\\end{aligned}`
        },
        {
          title: 'Euclidean Metric',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
          math: `d(x, y) = \\sqrt{\\sum_{i=1}^{n} (x_i - y_i)^2}`
        }
      ]
    },
    citations: ['rudin1976', 'munkres2000'],
    hasGraph: true,
    graphType: 'metric',
    aiWarning: true
  },
  {
    id: '202511100003',
    title: 'Continuous Functions',
    tags: ['analysis', 'continuity', 'calculus'],
    group: 'prototypes',
    linkedNotes: ['202511100001', '202511100002'],
    content: {
      abstract: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      sections: [
        {
          title: 'Epsilon-Delta Definition',
          text: 'Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
          math: `f: X \\to Y \\text{ is continuous at } x_0 \\in X \\text{ if:}

\\forall \\varepsilon > 0, \\exists \\delta > 0 \\text{ such that } d_X(x, x_0) < \\delta \\implies d_Y(f(x), f(x_0)) < \\varepsilon`
        },
        {
          title: 'Topological Continuity',
          text: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.',
          math: `f: (X, \\tau_X) \\to (Y, \\tau_Y) \\text{ is continuous if } f^{-1}(U) \\in \\tau_X \\text{ for all } U \\in \\tau_Y`
        }
      ]
    },
    citations: ['rudin1976', 'spivak2008'],
    hasGraph: true,
    graphType: 'function',
    aiWarning: true
  },
  {
    id: '202511100004',
    title: 'Convergence of Sequences',
    tags: ['analysis', 'sequences', 'limits'],
    group: 'prototypes',
    linkedNotes: ['202511100002', '202511100003'],
    content: {
      abstract: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.',
      sections: [
        {
          title: 'Definition in Metric Spaces',
          text: 'Nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse.',
          math: `\\text{A sequence } (x_n) \\text{ in a metric space } (X, d) \\text{ converges to } x \\in X \\text{ if:}

\\forall \\varepsilon > 0, \\exists N \\in \\mathbb{N} \\text{ such that } n > N \\implies d(x_n, x) < \\varepsilon`
        },
        {
          title: 'Cauchy Sequences',
          text: 'Quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.',
          math: `(x_n) \\text{ is Cauchy if } \\forall \\varepsilon > 0, \\exists N \\text{ such that } m, n > N \\implies d(x_m, x_n) < \\varepsilon`
        }
      ]
    },
    citations: ['rudin1976', 'apostol1974'],
    hasGraph: true,
    graphType: 'sequence',
    aiWarning: true
  }
];

export const bibliography = {
  'luhmann1984': {
    type: 'book',
    author: 'Luhmann, Niklas',
    title: 'Kommunikation mit Zettelkästen',
    year: '1984',
    publisher: 'Universität Bielefeld',
    bibtex: `@book{luhmann1984,
  author = {Luhmann, Niklas},
  title = {Kommunikation mit Zettelkästen},
  year = {1984},
  publisher = {Universität Bielefeld},
  note = {Ein Erfahrungsbericht}
}`
  },
  'munkres2000': {
    type: 'book',
    author: 'Munkres, James R.',
    title: 'Topology',
    year: '2000',
    edition: '2nd',
    publisher: 'Prentice Hall',
    bibtex: `@book{munkres2000,
  author = {Munkres, James R.},
  title = {Topology},
  year = {2000},
  edition = {2nd},
  publisher = {Prentice Hall},
  isbn = {978-0131816299}
}`
  },
  'rudin1976': {
    type: 'book',
    author: 'Rudin, Walter',
    title: 'Principles of Mathematical Analysis',
    year: '1976',
    edition: '3rd',
    publisher: 'McGraw-Hill',
    bibtex: `@book{rudin1976,
  author = {Rudin, Walter},
  title = {Principles of Mathematical Analysis},
  year = {1976},
  edition = {3rd},
  publisher = {McGraw-Hill},
  series = {International Series in Pure and Applied Mathematics},
  isbn = {978-0070542358}
}`
  },
  'spivak2008': {
    type: 'book',
    author: 'Spivak, Michael',
    title: 'Calculus',
    year: '2008',
    edition: '4th',
    publisher: 'Publish or Perish',
    bibtex: `@book{spivak2008,
  author = {Spivak, Michael},
  title = {Calculus},
  year = {2008},
  edition = {4th},
  publisher = {Publish or Perish},
  isbn = {978-0914098911}
}`
  },
  'apostol1974': {
    type: 'book',
    author: 'Apostol, Tom M.',
    title: 'Mathematical Analysis',
    year: '1974',
    edition: '2nd',
    publisher: 'Addison-Wesley',
    bibtex: `@book{apostol1974,
  author = {Apostol, Tom M.},
  title = {Mathematical Analysis},
  year = {1974},
  edition = {2nd},
  publisher = {Addison-Wesley},
  isbn = {978-0201002881}
}`
  }
};
