export const sampleNotes = [
  {
    id: '202511100001',
    title: 'Introduction to Topology',
    tags: ['topology', 'mathematics', 'foundations'],
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
