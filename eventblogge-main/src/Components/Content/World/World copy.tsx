import React from "react";
import ReactVirtualizedTable from "../../Add_on/IPLTeamAndVenue";
import DrugHeading from "../../../img/DrugHeading.jpg"


const WorldArticle = () => {
    return (
        <React.Fragment>
        <article className="blog-post fs-5">
        <h2 className="link-body-emphasis mb-1">Canada police seize over 400kg of drugs at border</h2>
        <br/>
        <img src={DrugHeading} className="float-end rounded img-fluid" alt="Loading img.." style={{ width: '100%', height: 'auto' }}/>
        <br/>
        <p>The driver of the commercial truck, who was apprehended on January 14, was identified as 29-year-old Komalpreet Sidhu, resident of Winnipeg, the capital of the province of Manitoba.</p>
        <p>In a release on Wednesday, the Canada Border Services Agency or CBSA said its officers discovered and seized 406.2 kg of suspected methamphetamine, approximately four million illicit doses valued at over CA$50,780,000, following the examination of a commercial truck at the Boissevain port of entry in southern Manitoba.</p>
       
        <p>“This is the largest seizure of illegal narcotics to occur in the Prairie Region. The driver was carrying a shipment destined for Winnipeg,” the release said. The Prairie region encompasses the Canadian provinces of Manitoba, Alberta and Saskatchewan.</p>
       
        <p>Sidhu was charged with importation of Methamphetamine and Possession of a Controlled Substance for the Purpose of Trafficking. He is expected to appear in Manitoba Law Courts on Thursday.</p>
        <p>The operation, called Dead Hand, was undertaken between the Federal Bureau of Investigation and the Combined Forces Special Enforcement Unit or CFSEU unit of the Royal Canadian Mounted Police or RCMP.</p>
        <p>In a release on Tuesday, the RCMP said It “arrested five individuals allegedly linked to a network trafficking drugs between Mexico, the United States and Canada. They were arrested under an international arrest warrant and will be extradited for trial in the United States.”</p>
        <p>They were identified as Ivan Gravel Gonzalez, 32, of Trois-Rivières, Quebec, Roberto Scoppa, 55, of Montréal, Ayush Sharma, 25, of Brampton, Guramrit Sidhu, 60, of Brampton and Subham Kumar, 29, of Calgary.</p>
        <p>On January 10, Canadian police announced they had arrested and charged 35-year-old Sukhwinder Dhanju, resident of Brampton in the Greater Toronto Area, for attempting to smuggle into the country cocaine worth approximately CA$ 6.5 million.</p>
        <p>On December 4, they caught Manpreet Singh, 27, also a resident of Brampton, after the truck he was driving was found to be carrying boxes containing 52 kg of suspected cocaine.</p>
        {/* <dl>
            <dt>HyperText Markup Language (HTML)</dt>
            <dd>The language used to describe and define the content of a Web page</dd>
            <dt>Cascading Style Sheets (CSS)</dt>
            <dd>Used to describe the appearance of Web content</dd>
            <dt>JavaScript (JS)</dt>
            <dd>The programming language used to build advanced Web sites and applications</dd>
        </dl>
        <h2>Inline HTML elements</h2>
        <p>HTML defines a long list of available inline tags, a complete list of which can be found on the <a
            href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element">Mozilla Developer Network</a>.</p>
        <ul>
            <li><strong>To bold text</strong>, use <code className="language-plaintext highlighter-rouge">&lt;strong&gt;</code>.</li>
            <li><em>To italicize text</em>, use <code className="language-plaintext highlighter-rouge">&lt;em&gt;</code>.
            </li>
            <li>Abbreviations, like <abbr title="HyperText Markup Language">HTML</abbr> should use <code
                className="language-plaintext highlighter-rouge">&lt;abbr&gt;</code>, with an optional <code
                    className="language-plaintext highlighter-rouge">title</code> attribute for the full phrase.</li>
            <li>Citations, like <cite>— Mark Otto</cite>, should use <code
                className="language-plaintext highlighter-rouge">&lt;cite&gt;</code>.</li>
            <li><del>Deleted</del> text should use <code
                className="language-plaintext highlighter-rouge">&lt;del&gt;</code> and <ins>inserted</ins> text should
                use <code className="language-plaintext highlighter-rouge">&lt;ins&gt;</code>.</li>
            <li>Superscript <sup>text</sup> uses <code className="language-plaintext highlighter-rouge">&lt;sup&gt;</code>
                and subscript <sub>text</sub> uses <code
                    className="language-plaintext highlighter-rouge">&lt;sub&gt;</code>.</li>
        </ul>
        <p>Most of these elements are styled by browsers with few modifications on our part.</p>
        <h2>Heading</h2>
        <ReactVirtualizedTable />
        <p>This is some additional paragraph placeholder content. It has been written to fill the available space
            and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the
            demonstration flowing, so be on the lookout for this exact same string of text.</p>
        <h3>Sub-heading</h3>
        <p>This is some additional paragraph placeholder content. It has been written to fill the available space
            and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the
            demonstration flowing, so be on the lookout for this exact same string of text.</p>
        <pre><code>Example code block</code></pre>
        <p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other
            highly repetitive body text used throughout.</p> */}
    </article>

    
    {/* <article className="blog-post">
        <h2 className="display-5 link-body-emphasis mb-1">Another blog post</h2>
        <p className="blog-post-meta">December 23, 2020 by <a href="#">Jacob</a></p>

        <p>This is some additional paragraph placeholder content. It has been written to fill the available space
            and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the
            demonstration flowing, so be on the lookout for this exact same string of text.</p>
        <blockquote>
            <p>Longer quote goes here, maybe with some <strong>emphasized text</strong> in the middle of it.</p>
        </blockquote>
        <p>This is some additional paragraph placeholder content. It has been written to fill the available space
            and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the
            demonstration flowing, so be on the lookout for this exact same string of text.</p>
        <h3>Example table</h3>
        <p>And don't forget about tables in these posts:</p>
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Upvotes</th>
                    <th>Downvotes</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Alice</td>
                    <td>10</td>
                    <td>11</td>
                </tr>
                <tr>
                    <td>Bob</td>
                    <td>4</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>Charlie</td>
                    <td>7</td>
                    <td>9</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td>Totals</td>
                    <td>21</td>
                    <td>23</td>
                </tr>
            </tfoot>
        </table>

        <p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other
            highly repetitive body text used throughout.</p>
    </article> */}
    </React.Fragment>
    );
  };
  
export default WorldArticle;