import EmailTemplatePage from '@/components/EmailTemplatePage';

const newProductsMjml = `
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
        <mj-text font-size="28px" color="#1a2b49" align="center" font-weight="bold">Introducing Our Latest Products!</mj-text>
        <mj-text font-size="16px" color="#555555">
          Hi {'{{customerName}}'},
          <br><br>
          We're excited to introduce you to our newest additions. Check out these amazing new products!
        </mj-text>
      </mj-column>
    </mj-section>

    <mj-section background-color="#ffffff" padding-top="0">
      <mj-column>
        <mj-text font-weight="bold" font-size="20px" color="#1a2b49">Featured New Product</mj-text>
        <mj-image src="https://via.placeholder.com/600x300" alt="Featured New Product" />
        <mj-text font-size="18px" font-weight="bold">{'{{featuredProductName}}'}</mj-text>
        <mj-text>{'{{featuredProductDescription}}'}</mj-text>
        <mj-button background-color="#e74c3c" color="#ffffff" href="{'{{featuredProductUrl}}'}">Shop Now</mj-button>
      </mj-column>
    </mj-section>

    <mj-section background-color="#ffffff" padding-top="20px">
      <mj-column>
        <mj-text font-weight="bold" font-size="20px" color="#1a2b49">More New Arrivals</mj-text>
      </mj-column>
    </mj-section>

    <mj-section background-color="#ffffff" padding-top="0">
      <mj-column width="50%">
        <mj-image src="https://via.placeholder.com/300x200" alt="New Product 1" />
        <mj-text font-size="16px" font-weight="bold">{'{{newProduct1Name}}'}</mj-text>
        <mj-text>{'{{newProduct1Description}}'}</mj-text>
        <mj-button background-color="#e74c3c" color="#ffffff" href="{'{{newProduct1Url}}'}">Learn More</mj-button>
      </mj-column>
      <mj-column width="50%">
        <mj-image src="https://via.placeholder.com/300x200" alt="New Product 2" />
        <mj-text font-size="16px" font-weight="bold">{'{{newProduct2Name}}'}</mj-text>
        <mj-text>{'{{newProduct2Description}}'}</mj-text>
        <mj-button background-color="#e74c3c" color="#ffffff" href="{'{{newProduct2Url}}'}">Learn More</mj-button>
      </mj-column>
    </mj-section>

    <mj-section background-color="#ffffff" padding-top="20px">
      <mj-column>
        <mj-button background-color="#e74c3c" color="#ffffff" href="{'{{allNewProductsUrl}}'}">View All New Products</mj-button>
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
          You're receiving this email because you've opted in to receive product updates.<br>
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

export default function NewProductsPage() {
    return (
        <EmailTemplatePage
            moduleName="Customer Engagement"
            templateName="New Product Announcements"
            mjmlContent={newProductsMjml}
        />
    );
}