# Quick Affiliate Addition Guide

## Adding a New Affiliate (5-Minute Process)

### Step 1: Open the Configuration File
Edit `/assets/affiliate-config.js`

### Step 2: Add Your Affiliate
Find the appropriate category and add your offer:

```javascript
// Example: Adding a new credit card
creditCards: {
  // ... existing offers ...
  your_new_card: {
    name: "Your Card Name",
    title: "💳 Your Card - Rewards",
    description: "Earn 50,000 bonus points when you spend $3,000 in 3 months.",
    cta: "Apply Now",
    baseUrl: "https://your-affiliate-link.com",
    commission: "$100+",
    requirements: {
      minNetWorth: "$10k–$50k",
      goals: ["Pay Off Debt", "Build Emergency Fund"],
      ageRanges: ["18-25", "26-35", "36-45"],
      excludeProducts: ["Credit Card"]
    },
    trackingParams: {
      utm_source: "savebest",
      utm_medium: "affiliate",
      utm_campaign: "net_worth_calculator"
    }
  }
}
```

### Step 3: Test Your Addition
1. Open `/lp/net-worth.html` in a browser
2. Complete the form with qualifying answers
3. Verify your offer appears in recommendations

## Quick Reference: Requirements

### Net Worth Tiers
- `<$10k` - Beginners
- `$10k–$50k` - Building wealth
- `$50k–$100k` - Established savers
- `$100k–$500k` - High earners
- `$500k–$1m` - Wealthy
- `$1m+` - High net worth

### Financial Goals
- `Build Emergency Fund` - Safety first
- `Pay Off Debt` - Debt reduction
- `Save for Retirement` - Long-term planning
- `Invest for Growth` - Wealth building
- `Buy a Home` - Real estate
- `Start a Business` - Entrepreneurship

### Age Ranges
- `18-25` - Young adults
- `26-35` - Early career
- `36-45` - Mid-career
- `46-55` - Established career
- `56-65` - Pre-retirement
- `65+` - Retirement

### Current Products
- `Credit Card` - Has credit card
- `Investment Account` - Has investments
- `Life Insurance` - Has insurance
- `None of the above` - No products

## Commission Tiers

### High Value ($100+)
- Credit card applications
- Mortgage applications
- High-value investment accounts

### Medium Value ($50-100)
- Investment platform signups
- Insurance quotes
- Premium financial services

### Lower Value ($10-50)
- Banking accounts
- Tax software
- Basic financial products

## Best Practices

### 1. Target the Right Users
- Match offer to user's financial situation
- Consider their goals and current products
- Don't recommend what they already have

### 2. Write Compelling Copy
- Focus on benefits, not features
- Include specific numbers (bonuses, rates, etc.)
- Use emojis for visual appeal

### 3. Set Realistic Requirements
- Don't be too restrictive
- Consider user's financial stage
- Test different requirement combinations

### 4. Track Performance
- Monitor click-through rates
- Track conversion rates
- Optimize based on data

## Common Mistakes to Avoid

❌ **Too Restrictive Requirements**
```javascript
// Bad - too narrow
requirements: {
  minNetWorth: "$1m+",
  goals: ["Start a Business"],
  ageRanges: ["65+"]
}

// Good - broader appeal
requirements: {
  minNetWorth: "$50k–$100k",
  goals: ["Invest for Growth", "Save for Retirement"],
  ageRanges: ["26-35", "36-45", "46-55"]
}
```

❌ **Poor Copy**
```javascript
// Bad - generic
description: "A good financial product for you."

// Good - specific and compelling
description: "Earn 60,000 bonus points ($750 value) when you spend $4,000 in 3 months."
```

❌ **Wrong Commission Value**
```javascript
// Bad - overestimating
commission: "$500+"

// Good - realistic
commission: "$50-100"
```

## Testing Your Affiliate

### Test Scenarios
1. **Qualifying User**: Should see your offer
2. **Non-Qualifying User**: Should not see your offer
3. **Edge Case**: User with partial qualifications

### What to Check
- [ ] Offer appears for qualifying users
- [ ] Offer doesn't appear for non-qualifying users
- [ ] Tracking parameters are correct
- [ ] Link opens in new tab
- [ ] Analytics events fire correctly

## Need Help?

1. Check the browser console for errors
2. Verify your requirements logic
3. Test with different user scenarios
4. Review the full documentation in `AFFILIATE_SYSTEM.md`

## Quick Commands

### View Current Affiliates
```bash
grep -A 20 "name:" assets/affiliate-config.js
```

### Test Form Locally
```bash
# Open in browser
open lp/net-worth.html
```

### Check for Errors
```bash
# Open browser console and look for errors
# Or use browser dev tools
```