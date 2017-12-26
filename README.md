# React Responsive List (Table) 📋


React Responsive List converts your table data to a user-friendly list in mobile view.

It's lightweight, has no dependencies and pretty flexible.

## Documentation
* [Demo & Examples](#demo--examples)
* [Installation](#installation)
* [Usage](#usage)
* [Development](#development)
* [License](#license)


## Demo & Examples

Live demo: [sanohin.github.io/react-responsive-list](http://sanohin.github.io/react-responsive-list/)


To build the examples locally, run:

```
npm install
npm start
```

Then open [`localhost:1234`](http://localhost:1234) in a browser.


## Installation

The easiest way to use react-responsive-list is to install it from NPM and include it in your own React build process (using [Browserify](http://browserify.org), [Webpack](http://webpack.github.io/), etc).

```
npm install react-responsive-list --save
```


## Usage

To use, import { Table, Thead, Tbody, Tr, Th, Td } from 'react-responsive-list'.. Then, copy or import the index.css file into your project. Write your html table with capitol letters, and voilà!

`Table` supports `breakPoint` prop, which will set, when to make your table mobile. Default is 600.

```jsx
import React from 'react'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-responsive-list'
import 'react-responsive-list/assets/index.css'

const MyAwesomeTable = () => (
    <Table breakPoint={700}>
        <Thead>
            <Tr>
                <Th>Annual Conference</Th>
                <Th>Year</Th>
                <Th>Location</Th>
                <Th>President</Th>
                <Th>Program Chair</Th>
                <Th>Conference Theme</Th>
            </Tr>
        </Thead>
        <Tbody>
            <Tr>
                <Td>31</Td>
                <Td>2017</Td>
                <Td>Alabama Community College System (ACCS)</Td>
                <Td>Mr. Toner Evans, Samford University</Td>
                <Td>Ms. Kelly Birchfield, Auburn University Montgomery</Td>
                <Td />
            </Tr>
            <Tr>
                <Td>30</Td>
                <Td>2016</Td>
                <Td>Samford University</Td>
                <Td>Ms. Angel Jowers, University of West Alabama</Td>
                <Td>Mr. Toner Evans, Samford University</Td>
                <Td>Academ(ia) Awards: Best Practices/Performances in IR</Td>
            </Tr>
            <Tr>
                <Td>29</Td>
                <Td>2015</Td>
                <Td>Eufaula (Wallace Community College Dothan)</Td>
                <Td>Dr. Annette Cederholm, Snead State Community College</Td>
                <Td>Ms. Angel Jowers, University of West Alabama</Td>
                <Td>Back to the Future</Td>
            </Tr>
            <Tr>
                <Td>28</Td>
                <Td>2014</Td>
                <Td>
                    Huntsville (J.F. Drake State Community and Technical
                    College)
                </Td>
                <Td>Dr. Jon C. Acker, The University of Alabama</Td>
                <Td>Dr. Annette Cederholm, Snead State Community College</Td>
                <Td>Institutional Research…and Beyond!</Td>
            </Tr>
            <Tr>
                <Td>27</Td>
                <Td>2013</Td>
                <Td>The University of Alabama</Td>
                <Td>Mr. John McIntosh, Northwest-Shoals Community College</Td>
                <Td>Dr. Jon C. Acker, The University of Alabama</Td>
                <Td>Moving the Ball Forward</Td>
            </Tr>
        </Tbody>
    </Table>
);

```

## Development

**NOTE:** The source code for the component is in `src`. Built version with rollup is available in `dist`.

To build, watch and serve the examples (which will also watch the component source), run `npm start`. If you just want to watch changes to `src` and rebuild `dist`, run `npm run watch`.

## License

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
