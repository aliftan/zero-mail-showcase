import EmailTemplatePage from '@/components/EmailTemplatePage';

const specialOffersMjml = `
<mjml>
  <mj-head>
    <mj-attributes>
      <mj-all font-family="Arial, sans-serif" />
      <mj-text font-size="14px" color="#555555" line-height="20px" />
      <mj-section background-color="#ffffff" padding="20px" />
    </mj-attributes>
  </mj-head>
  <mj-body background-color="#f4f4f4">
    <mj-section padding-bottom="0" background-color="#1a2b49">
      <mj-column width="100%">
        <mj-image src="https://via.placeholder.com/200x50/1a2b49/ffffff?text=Your+Logo" alt="Logo" align="center" width="200px" />
      </mj-column>
    </mj-section>
    
    <mj-section background-color="#ffffff" padding-top="40px" padding-bottom="40px">
      <mj-column>
        <mj-text font-size="28px" color="#1a2b49" align="center" font-weight="bold">Special Offers Just for You!</mj-text>
        <mj-text font-size="16px" color="#555555">
          Hi {'{{customerName}}'},
          <br><br>
          Check out these amazing deals we've prepared especially for you!
        </mj-text>
      </mj-column>
    </mj-section>

    <mj-section background-color="#ffffff" padding-top="0">
      <mj-column>
        <mj-text font-weight="bold" font-size="20px" color="#1a2b49">Featured Deal</mj-text>
        <mj-image src="https://via.placeholder.com/600x300" alt="Featured Deal" />
        <mj-text font-size="18px" font-weight="bold">{'{{featuredDealTitle}}'}</mj-text>
        <mj-text>{'{{featuredDealDescription}}'}</mj-text>
        <mj-button background-color="#e74c3c" color="#ffffff" href="{'{{featuredDealUrl}}'}">Shop Now</mj-button>
      </mj-column>
    </mj-section>

    <mj-section background-color="#ffffff" padding-top="20px">
      <mj-column>
        <mj-text font-weight="bold" font-size="20px" color="#1a2b49">More Great Offers</mj-text>
        <mj-text>
          • {'{{offer1}}'}<br>
          • {'{{offer2}}'}<br>
          • {'{{offer3}}'}<br>
        </mj-text>
        <mj-button background-color="#e74c3c" color="#ffffff" href="{'{{allOffersUrl}}'}">View All Offers</mj-button>
      </mj-column>
    </mj-section>

    <mj-section background-color="#ffffff" padding-top="20px">
      <mj-column>
        <mj-text font-weight="bold" font-size="20px" color="#1a2b49">Limited Time Only!</mj-text>
        <mj-text>
          These offers are only available until {'{{offerEndDate}}'}. Don't miss out!
        </mj-text>
      </mj-column>
    </mj-section>
    
    <mj-section padding-top="20px" background-color="#f4f4f4">
      <mj-column>
        <mj-social font-size="15px" icon-size="30px" mode="horizontal">
          <mj-social-element name="facebook" href="https://facebook.com/yourcompany" />
          <mj-social-element name="twitter" href="https://twitter.com/yourcompany" />
          <mj-social-element name="instagram" href="https://instagram.com/yourcompany" />
        </mj-social>
        <mj-text align="center" font-size="12px">
          You're receiving this email because you've opted in to receive special offers.<br>
          Want to change how you receive these emails?<br>
          You can <a href="{'{{updatePreferencesUrl}}'}" style="color: #1a2b49;">update your preferences</a> or <a href="{'{{unsubscribeUrl}}'}" style="color: #1a2b49;">unsubscribe</a> at any time.
        </mj-text>
        <mj-text align="center" font-size="12px">
          © 2024 Your E-commerce Company. All rights reserved.
        </mj-text>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>
`;

export default function SpecialOffersPage() {
    return (
        <EmailTemplatePage
            moduleName="Customer Engagement"
            templateName="Special Offers/Promotions"
            mjmlContent={specialOffersMjml}
        />
    );
}