# FlexOffers Postback Webhook Setup

## Your Zapier Webhook URL
```
https://hooks.zapier.com/hooks/catch/496624/u6pujih/
```

## Complete Postback URL Template

Add this as your postback URL in FlexOffers:

```
https://hooks.zapier.com/hooks/catch/496624/u6pujih/?fobs=#fobs#&fobs2=#fobs2#&fobs3=#fobs3#&fobs4=#fobs4#&fobs5=#fobs5#&order_number=#on#&sale_amount=#sa#&commission_amount=#ca#&click_id=#clickid#&sales_id=#flx_salesid#&event_time=#et#
```

## URL Breakdown

### Subtracking Variables
- `fobs=#fobs#` - User ID (sabeid)
- `fobs2=#fobs2#` - Google Click ID (gclid)
- `fobs3=#fobs3#` - Available for additional tracking
- `fobs4=#fobs4#` - Available for additional tracking
- `fobs5=#fobs5#` - Available for additional tracking

### Transaction Variables
- `order_number=#on#` - FlexOffers Order Number
- `sale_amount=#sa#` - Sale Amount
- `commission_amount=#ca#` - Commission Amount
- `click_id=#clickid#` - FlexOffers Internal Click ID
- `sales_id=#flx_salesid#` - FlexOffers Sales ID
- `event_time=#et#` - Event Time and Date

## Zapier Webhook Setup

### 1. Webhook Trigger
- **App**: Webhooks by Zapier
- **Event**: Catch Hook
- **URL**: `https://hooks.zapier.com/hooks/catch/496624/u6pujih/`

### 2. Data Structure Received
When a commission is earned, Zapier will receive:
```json
{
  "fobs": "user_id_here",
  "fobs2": "gclid_here", 
  "fobs3": "additional_tracking",
  "fobs4": "additional_tracking",
  "fobs5": "additional_tracking",
  "order_number": "12345",
  "sale_amount": "99.99",
  "commission_amount": "15.00",
  "click_id": "flexoffers_click_id",
  "sales_id": "flexoffers_sales_id",
  "event_time": "2024-01-15 14:30:00"
}
```

### 3. Zapier Actions to Add

#### Google Ads Conversion Tracking
- **App**: Google Ads
- **Action**: Create Conversion
- **Conversion Action**: Your conversion action
- **Click ID**: `{{fobs2}}` (gclid)
- **Conversion Value**: `{{sale_amount}}`

#### Facebook Ads Conversion Tracking
- **App**: Facebook Conversions API
- **Event Name**: Purchase
- **Event ID**: `{{sales_id}}`
- **Value**: `{{sale_amount}}`
- **Currency**: USD
- **User Data**: 
  - Click ID: `{{fobs2}}`

#### Google Analytics 4
- **App**: Google Analytics 4
- **Action**: Track Event
- **Event Name**: purchase
- **Event Parameters**:
  - transaction_id: `{{order_number}}`
  - value: `{{sale_amount}}`
  - currency: USD
  - items: [{"item_name": "Empower Signup", "price": "{{sale_amount}}"}]

## Testing the Webhook

### Test URL
You can test your webhook with this sample data:
```
https://hooks.zapier.com/hooks/catch/496624/u6pujih/?fobs=test_user_123&fobs2=gclid_test_456&order_number=TEST123&sale_amount=99.99&commission_amount=15.00&click_id=click_789&sales_id=sale_101&event_time=2024-01-15%2014:30:00
```

### Manual Testing
1. Open the test URL in your browser
2. Check your Zapier dashboard for the webhook trigger
3. Verify the data is being received correctly

## Current Implementation

Your current redirect URL in `net-worth.html`:
```javascript
const baseUrl = 'https://track.flexlinkspro.com/g.ashx?foid=156074.13439.1058727&trid=1368848.157618&foc=16&fot=9999&fos=6';
const url = `${baseUrl}&fobs=${sabeid}&fobs2=${gclid}`;
```

This passes:
- `fobs` = User ID (sabeid)
- `fobs2` = Google Click ID (gclid)

## Next Steps

1. **Add the postback URL** to your FlexOffers campaign settings
2. **Set up Zapier actions** to push conversions to your ad platforms
3. **Test the webhook** with sample data
4. **Monitor conversions** in your ad platforms

## Additional Tracking Options

You can enhance tracking by adding more variables to your redirect URL:

```javascript
// Enhanced redirect URL
const url = `${baseUrl}&fobs=${sabeid}&fobs2=${gclid}&fobs3=${assetRange}&fobs4=${trackingMethod}`;
```

This would pass:
- `fobs3` = Asset Range (e.g., "$100k–$500k")
- `fobs4` = Tracking Method (e.g., "Spreadsheet")
