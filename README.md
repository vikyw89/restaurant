# restaurant

Live preview : https://vikyw89.github.io/restaurant/

Created by Viky for The Odin Project

<h3><a href="#assignment" class="anchor-link">Assignment</a></h3>

<div class="lesson-content__panel">

  <ol>
    <li>Start the project the same way you began the webpack tutorial project.
      <ol>
        <li>
          <p>run <code>npm init</code> in your project directory to generate a <code>package.json</code> file.</p>
        </li>
        <li>
          <p>run <code>npm install webpack webpack-cli --save-dev</code> to install webpack to the node_modules directory of your project.</p>
          <ul>
            <li>Quick tip: the <code>node_modules</code> folder can get <em>really</em> big. It is customary to   add a <code>.gitignore</code> file to your project so that you don’t have to sync the contents of <code>node_modules</code> to github. The dependencies that are stored there can be installed from your package.json by running <code>npm install</code>, so you don’t need to sync them.</li>
          </ul>
        </li>
        <li>
          <p>Create a <code>src</code> and <code>dist</code> directory with the following contents:</p>
          <ol>
            <li>
              <p>an <code>index.js</code> file in <code>src</code></p>
            </li>
            <li>
              <p>an <code>index.html</code> file in <code>dist</code>. Go ahead and link the <code>main.js</code> file in a script tag. <code>main.js</code> is the file that will be generated by webpack.</p>
            </li>
            <li>
              <p>create a <code>webpack.config.js</code> file that looks just like our file from the <a href="https://webpack.js.org/guides/getting-started/#using-a-configuration" target="_blank" rel="noopener noreferrer">tutorial</a>.</p>
            </li>
          </ol>
        </li>
      </ol>
    </li>
    <li>
      <p>Set up an HTML skeleton inside of <code>dist/index.html</code> with single <code>&lt;div id="content"&gt;</code>.</p>
    </li>
    <li>
      <p>Inside of <code>src/index.js</code> write a simple console.log or alert statement and then run <code>npx webpack</code>. Load up <code>dist/index.html</code> in a browser to make sure everything is working correctly.</p>
      <ul>
        <li>Quick tip #2: if you run <code>npx webpack --watch</code> you will not have to rerun webpack every time you make a change.</li>
      </ul>
    </li>
    <li>
      <p>Create a bare-bones homepage for a restaurant. Include an image, headline, and some copy about how wonderful the restaurant is. It’s okay to hard-code these into the HTML for now just to see how they look on the page.</p>
    </li>
    <li>
      <p>Now remove those elements from the HTML (so leave only the <code>&lt;html&gt;</code>, <code>&lt;body&gt;</code>, and <code>&lt;div id="content"&gt;</code> tags) and instead create them by using JavaScript only, e.g. by appending each new element to <code>div#content</code> once the page is first loaded. Since we’re all set up to write our code in multiple files, let’s write this initial page-load function inside of its own module and then import and call it inside of <code>index.js</code>.</p>
    </li>
    <li>
      <p>Next, set up your restaurant site to use tabbed browsing to access the Contact and Menu pages. <a href="https://eckben.github.io/bearysBreakfastBar/" target="_blank" rel="noopener noreferrer">Look at the behavior of this student solution</a> for visual inspiration.</p>
      <ol>
        <li>
          <p>Put the contents of each ‘tab’ inside of its own module. Each module will export a function that creates a div element, adds the appropriate content and styles to that element and then appends it to the DOM.</p>
        </li>
        <li>
          <p>Write the tab-switching logic inside of <code>index.js</code>. You should have event listeners for each tab that wipes out the current contents and then runs the correct ‘tab module’ to populate it again.</p>
        </li>
      </ol>
    </li>
    <li>
      <p>If you are using GitHub pages to host your completed page you need to do a tiny bit more work to get it to show up. After running <code>webpack</code> the full bundled version of your site is available in the <code>dist</code> folder, but GH pages is looking for an index.html in the root directory of your project.</p>
      <ol>
        <li>Simply follow the instructions on <a href="https://gist.github.com/cobyism/4730490" target="_blank" rel="noopener noreferrer">this gist</a>. EZPZ!</li>
        <li>Recall that the <strong>source branch</strong> for GitHub Pages is set in your repository’s settings.</li>
      </ol>
    </li>
  </ol>
</div>
