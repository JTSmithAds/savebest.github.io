# Affiliate System Documentation

## Overview

The net worth calculator now includes a sophisticated affiliate recommendation system that personalizes offers based on user responses. The system is designed to maximize value for users while generating high-value affiliate commissions ($10+ per user).

## How It Works

### 1. User Data Collection
The system collects the following user data through a multi-step form:
- **Net Worth Range**: <$10k, $10k–$50k, $50k–$100k, $100k–$500k, $500k–$1m, $1m+
- **Current Tracking Method**: Spreadsheet, Free App, Paid Software, None
- **Age Range**: 18-25, 26-35, 36-45, 46-55, 56-65, 65+
- **Financial Goal**: Build Emergency Fund, Pay Off Debt, Save for Retirement, Invest for Growth, Buy a Home, Start a Business
- **Current Products**: Credit Card, Investment Account, Life Insurance, None

### 2. Personalized Recommendations
Based on user responses, the system:
- Filters affiliate offers based on qualification requirements
- Sorts recommendations by commission value (highest first)
- Limits recommendations to 5 total (including Empower)
- Ensures relevance and value for the user

### 3. Tracking & Analytics
Each recommendation includes:
- User ID tracking (`sabeid`)
- Google Click ID tracking (`gclid`)
- UTM parameters for attribution
- User data for personalization

## Current Affiliate Opportunities

### Investment Platforms ($50-100 per user)
- **M1 Finance**: Commission-free investing with automated portfolio management
- **Betterment**: Robo-advisor with automated portfolio management
- **Wealthfront**: Advanced robo-advisor with tax-loss harvesting

### Credit Cards ($100+ per approved application)
- **Chase Sapphire Preferred**: 60,000 bonus points ($750 value)
- **American Express Gold**: 60,000 Membership Rewards points ($600 value)
- **Capital One Venture**: 75,000 bonus miles ($750 value)

### Insurance ($50-100 per qualified quote)
- **Policygenius**: Life insurance comparison and quotes
- **Lemonade**: Renters and home insurance

### Real Estate & Mortgages ($100+ per qualified application)
- **Rocket Mortgage**: Mortgage pre-approval and rates
- **Better.com**: Digital mortgage platform
- **Fundrise**: Real estate investing platform

### Tax & Accounting ($10-25 per sale)
- **TurboTax**: Tax filing software
- **H&R Block**: Tax preparation services

### Banking & Savings ($25-50 per signup)
- **SoFi Money**: High-yield checking and savings
- **Ally Bank**: High-yield savings accounts

## Adding New Affiliate Opportunities

### 1. Edit the Configuration File
Add new offers to `/assets/affiliate-config.js`:

```javascript
const AFFILIATE_CONFIG = {
  // Add new category
  newCategory: {
    offer_name: {
      name: "Offer Display Name",
      title: "🎯 Offer Title",
      description: "Compelling description of the offer",
      cta: "Call to Action",
      baseUrl: "https://affiliate-link.com",
      commission: "$50-100",
      requirements: {
        minNetWorth: "$50k–$100k",
        goals: ["Invest for Growth", "Save for Retirement"],
        ageRanges: ["26-35", "36-45", "46-55"],
        excludeProducts: ["Credit Card"] // Optional
      },
      trackingParams: {
        utm_source: "savebest",
        utm_medium: "affiliate",
        utm_campaign: "net_worth_calculator"
      }
    }
  }
};
```

### 2. Requirements Configuration

#### Net Worth Requirements
- `minNetWorth`: Minimum net worth required
- Options: `<$10k`, `$10k–$50k`, `$50k–$100k`, `$100k–$500k`, `$500k–$1m`, `$1m+`

#### Financial Goals
- `goals`: Array of relevant financial goals
- Options: `Build Emergency Fund`, `Pay Off Debt`, `Save for Retirement`, `Invest for Growth`, `Buy a Home`, `Start a Business`

#### Age Ranges
- `ageRanges`: Array of target age ranges
- Options: `18-25`, `26-35`, `36-45`, `46-55`, `56-65`, `65+`

#### Excluded Products
- `excludeProducts`: Products the user already has
- Options: `Credit Card`, `Investment Account`, `Life Insurance`

### 3. Tracking Parameters
Configure UTM parameters and tracking:
```javascript
trackingParams: {
  utm_source: "savebest",
  utm_medium: "affiliate",
  utm_campaign: "net_worth_calculator",
  // Add any additional tracking parameters
}
```

## Best Practices

### 1. Commission Requirements
- Only include offers with $10+ per user
- Prioritize higher-value offers ($50+ per user)
- Consider lifetime value, not just signup bonuses

### 2. User Experience
- Ensure offers are genuinely valuable to users
- Match offers to user's financial situation
- Don't overwhelm with too many recommendations

### 3. Tracking & Analytics
- Use consistent UTM parameters
- Track user journey through the form
- Monitor conversion rates by user segment

### 4. Compliance
- Include proper disclosures
- Follow FTC guidelines for affiliate marketing
- Ensure offers comply with financial regulations

## Performance Optimization

### 1. A/B Testing
Test different:
- Question order and wording
- Recommendation algorithms
- CTA button text and colors

### 2. Conversion Optimization
- Monitor drop-off rates at each step
- Optimize form length vs. data quality
- Test different recommendation layouts

### 3. Revenue Optimization
- Track revenue per user by segment
- Optimize for highest-value user segments
- Test different offer combinations

## Technical Implementation

### Files Modified
- `/lp/net-worth.html`: Main form and user interface
- `/assets/affiliate-config.js`: Affiliate configuration and logic

### Key Functions
- `getPersonalizedRecommendations(userData)`: Generates recommendations
- `qualifiesForOffer(offer, userData)`: Checks user eligibility
- `buildAffiliateUrl(offer, userData)`: Creates tracking URLs
- `displayRecommendations()`: Renders recommendations in UI

### User Data Flow
1. User completes form steps
2. Data stored in JavaScript variables
3. `generateRecommendations()` called
4. Recommendations filtered and sorted
5. Displayed to user with tracking links

## Monitoring & Analytics

### Key Metrics to Track
- Form completion rate
- Recommendation click-through rate
- Conversion rate by affiliate
- Revenue per user
- User satisfaction scores

### Google Analytics Events
- `form_interaction`: Tracks each form step
- `recommendation_click`: Tracks affiliate clicks
- `email_submit`: Tracks email capture

### Facebook Pixel Events
- `Lead`: Tracks form completions
- `Purchase`: Tracks successful conversions

## Future Enhancements

### 1. Machine Learning
- Predict user preferences based on behavior
- Optimize recommendation timing
- Personalize offer messaging

### 2. Advanced Segmentation
- Income-based targeting
- Geographic targeting
- Behavioral targeting

### 3. Dynamic Pricing
- Real-time commission optimization
- Seasonal offer adjustments
- Competitive pricing analysis

### 4. Integration Opportunities
- CRM integration for lead management
- Email marketing automation
- Retargeting campaigns

## Support & Maintenance

### Regular Tasks
- Monitor affiliate link health
- Update commission rates
- Test form functionality
- Review user feedback

### Troubleshooting
- Check browser console for errors
- Verify affiliate link tracking
- Test user data collection
- Monitor conversion tracking

## Contact & Resources

For questions about the affiliate system:
- Review this documentation
- Check the affiliate configuration file
- Test the form functionality
- Monitor analytics data

The system is designed to be self-maintaining but should be reviewed monthly for optimization opportunities.