import { Link } from 'react-router-dom';

export default function Privacy() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-10">
        <p className="text-ku-teal font-semibold text-sm uppercase tracking-wide mb-2">
          Legal
        </p>
        <h1 className="text-3xl font-bold text-ku-navy mb-4">Privacy Policy</h1>
        <p className="text-gray-500 text-sm">Version 2.1 &mdash; Last updated: September 2026</p>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="font-bold text-ku-navy text-lg mb-2">The Short Version</h2>
          <div className="bg-green-50 border border-green-200 rounded-xl p-5">
            <p className="text-green-800 font-medium text-sm leading-relaxed">
              The core Kamunity AI Audit and toolkit run entirely in your web browser. Your
              answers, scores, toolkit progress, and data entered into the interactive tools
              are stored <strong>only in your browser's localStorage</strong> on your device.
              We have no analytics, advertising cookies, or tracking scripts. If you choose to
              submit the separate feedback form, the current page, selected reaction, and message
              are sent to us through Netlify Forms. Audit answers, scores, and toolkit data are
              not included in that submission.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-bold text-ku-navy text-lg mb-2">What We Don't Collect</h2>
          <ul className="space-y-2 text-sm text-gray-700">
            {[
              'The audit and toolkit do not ask for names, emails, or phone numbers',
              'We do not transmit your audit answers, scores, or results to any server',
              'We do not transmit your toolkit checklist progress, tool inventory data, or cost calculator entries',
              'We do not use cookies or similar tracking technologies',
              'We do not use analytics services (no Google Analytics, no Hotjar, nothing)',
              'We do not load third-party scripts, fonts, or tracking pixels that collect data',
              'We do not create user accounts, profiles, or combine feedback with your audit results',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-bold text-ku-navy text-lg mb-2">Optional Feedback</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            The feedback control is optional and separate from the audit and toolkit. Nothing is
            sent merely by opening it. If you press <strong>Send Feedback</strong>, we transmit
            the current page path, your selected reaction (if any), and the message you entered
            to Netlify Forms so the submission is available to Kamunity Consulting. Do not include
            personal, confidential, client, or other sensitive information.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            The feedback submission does not contain your audit answers, scores, toolkit entries,
            or locally stored results. Netlify processes the submission and associated request
            metadata under its privacy policy. If delivery cannot be confirmed, the form reports
            the failure and keeps your draft in the open form so you can retry.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-ku-navy text-lg mb-2">Data Stored on Your Device</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            This tool uses your browser's <strong>localStorage</strong> to save your progress
            so you can return to it later. This audit and toolkit data never leaves your device.
            Specifically, we store:
          </p>
          <ul className="space-y-2 text-sm text-gray-700">
            {[
              { key: 'ku-audit-results', desc: 'Your audit answers, scores, and completion date' },
              { key: 'ku-guide-*', desc: 'Your checklist progress, data entries, notes, and status for each toolkit guide' },
              { key: 'ku-tool-inventory', desc: 'Your digital tool inventory table entries' },
              { key: 'ku-cost-calculator', desc: 'Your cost comparison calculator entries' },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-gray-400 font-mono text-xs mt-0.5 shrink-0 bg-gray-100 px-1.5 py-0.5 rounded">{item.key}</span>
                <span>{item.desc}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-gray-700 leading-relaxed mt-3">
            You can clear all stored data at any time by clearing your browser's localStorage
            for this site, or by using your browser's "Clear site data" function. You can also
            download your data as CSV files before clearing.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-ku-navy text-lg mb-2">Downloadable Templates</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            The toolkit guides offer downloadable Word-compatible template documents (.doc files).
            These templates are generated entirely in your browser using JavaScript. No data is
            sent to any server to create these files. The downloaded templates contain
            placeholder text for you to fill in; they do not contain any of your previously
            entered data.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-ku-navy text-lg mb-2">How the Audit Works</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            The Kamunity AI Audit is a static web application. When you visit the site,
            the entire application is downloaded to your browser. All processing, including
            your answers, score calculation, recommendation generation, checklist management,
            tool inventory tracking, and cost calculations, happens locally on your device.
            Audit and toolkit data is not transmitted to our servers or any third party during
            normal use. The optional feedback submission described above is the only in-site
            feature that deliberately sends user-entered text to us.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-ku-navy text-lg mb-2">External Links</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Our toolkit guides contain links to external websites (such as Google, Microsoft,
            TechSoup, and others). When you click these links, you leave our site and are
            subject to those sites' privacy policies. We have no control over their data
            practices and encourage you to review their privacy policies.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-ku-navy text-lg mb-2">Hosting</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            This site is hosted on Netlify. Netlify may process standard web server logs
            (such as IP address, browser type, and pages requested) and processes optional
            feedback submissions through Netlify Forms. This is covered by{' '}
            <a
              href="https://www.netlify.com/privacy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ku-teal hover:text-ku-teal-dark no-underline"
            >
              Netlify's Privacy Policy
            </a>
            . Kamunity Consulting can access submitted feedback through the service but does not
            receive your audit answers, scores, or toolkit data.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-ku-navy text-lg mb-2">Consulting Services</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            If you contact Kamunity Consulting for workshops or consulting services (via our
            website at kamunityconsulting.com), that interaction is covered by Kamunity
            Consulting's separate privacy policy. This audit tool and the consulting business
            operate under different data handling practices. The consulting side may collect
            contact information necessary to provide services.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-ku-navy text-lg mb-2">Your Rights</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            Under the Australian Privacy Principles, you have the right to know what personal
            information an organisation holds about you and how it is used. We do not receive
            your core audit or toolkit data. Optional feedback you deliberately submit is
            processed through Netlify Forms and made available to Kamunity Consulting.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            For more information about your privacy rights, visit the{' '}
            <a
              href="https://www.oaic.gov.au/privacy/your-privacy-rights"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ku-teal hover:text-ku-teal-dark no-underline"
            >
              Office of the Australian Information Commissioner
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="font-bold text-ku-navy text-lg mb-2">Changes to This Policy</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            If we change how this tool handles data, we will update this policy and clearly
            communicate what changed. Running the core audit and toolkit client-side, without
            transmitting their answers or results, remains a fundamental design principle.
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-ku-navy text-sm mb-2">Version History</h3>
            <ul className="space-y-1 text-xs text-gray-600">
              <li><strong>v2.1 (Sep 2026)</strong> &mdash; Added accurate disclosure of the optional Netlify Forms feedback submission and distinguished it from locally stored audit and toolkit data.</li>
              <li><strong>v2.0 (Feb 2026)</strong> &mdash; Updated to reflect localStorage persistence for audit results, toolkit guide progress, tool inventory, and cost calculator. Added sections on downloadable templates and device-stored data. Clarified that no data leaves the user's device.</li>
              <li><strong>v1.0 (Feb 2026)</strong> &mdash; Initial privacy policy. Covered zero-collection static audit, external links, hosting, and consulting services.</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="font-bold text-ku-navy text-lg mb-2">Contact</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            If you have questions about this privacy policy, contact us via{' '}
            <a
              href="https://kamunityconsulting.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ku-teal hover:text-ku-teal-dark no-underline"
            >
              kamunityconsulting.com
            </a>
            .
          </p>
        </section>
      </div>

      <div className="mt-10 text-center">
        <Link
          to="/"
          className="text-ku-teal font-medium text-sm hover:text-ku-teal-dark no-underline"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
