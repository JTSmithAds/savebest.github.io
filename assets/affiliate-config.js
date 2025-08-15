// Affiliate Configuration and Management System
// This file contains all affiliate opportunities with tracking and personalization logic

const AFFILIATE_CONFIG = {
  // Investment Platforms (High Value: $50-100 per user)
  investment: {
    m1_finance: {
      name: "M1 Finance",
      title: "📈 M1 Finance - Smart Investing",
      description: "Commission-free investing with automated portfolio management. Great for building wealth long-term.",
      cta: "Get $50 Bonus",
      baseUrl: "https://m1.finance/",
      commission: "$50-100",
      requirements: {
        minNetWorth: "$50k–$100k",
        goals: ["Invest for Growth", "Save for Retirement"],
        ageRanges: ["18-25", "26-35", "36-45", "46-55"]
      },
      trackingParams: {
        utm_source: "savebest",
        utm_medium: "affiliate",
        utm_campaign: "net_worth_calculator"
      }
    },
    betterment: {
      name: "Betterment",
      title: "🤖 Betterment - Automated Investing",
      description: "Robo-advisor that automatically manages your portfolio based on your goals and risk tolerance.",
      cta: "Start Investing",
      baseUrl: "https://www.betterment.com/",
      commission: "$50-100",
      requirements: {
        minNetWorth: "$100k–$500k",
        goals: ["Save for Retirement", "Invest for Growth"],
        ageRanges: ["26-35", "36-45", "46-55", "56-65"]
      },
      trackingParams: {
        utm_source: "savebest",
        utm_medium: "affiliate",
        utm_campaign: "net_worth_calculator"
      }
    },
    wealthfront: {
      name: "Wealthfront",
      title: "📊 Wealthfront - Tax-Efficient Investing",
      description: "Advanced robo-advisor with tax-loss harvesting and portfolio optimization.",
      cta: "Get Started",
      baseUrl: "https://www.wealthfront.com/",
      commission: "$50-100",
      requirements: {
        minNetWorth: "$500k–$1m",
        goals: ["Invest for Growth", "Save for Retirement"],
        ageRanges: ["36-45", "46-55", "56-65"]
      },
      trackingParams: {
        utm_source: "savebest",
        utm_medium: "affiliate",
        utm_campaign: "net_worth_calculator"
      }
    }
  },

  // Credit Cards (High Value: $100+ per approved application)
  creditCards: {
    chase_sapphire_preferred: {
      name: "Chase Sapphire Preferred",
      title: "💳 Chase Sapphire Preferred",
      description: "Earn 60,000 bonus points ($750 value) when you spend $4,000 in 3 months. Great for travel rewards.",
      cta: "Apply Now",
      baseUrl: "https://creditcards.chase.com/rewards-credit-cards/sapphire/preferred",
      commission: "$100+",
      requirements: {
        minNetWorth: "$10k–$50k",
        goals: ["Pay Off Debt", "Build Emergency Fund", "Invest for Growth"],
        ageRanges: ["18-25", "26-35", "36-45", "46-55"],
        excludeProducts: ["Credit Card"]
      },
      trackingParams: {
        referrer: "savebest_networth"
      }
    },
    amex_gold: {
      name: "American Express Gold",
      title: "💳 American Express Gold Card",
      description: "Earn 60,000 Membership Rewards points ($600 value) when you spend $4,000 in 6 months.",
      cta: "Apply Now",
      baseUrl: "https://www.americanexpress.com/us/credit-cards/card/gold-card/",
      commission: "$100+",
      requirements: {
        minNetWorth: "$50k–$100k",
        goals: ["Invest for Growth", "Save for Retirement"],
        ageRanges: ["26-35", "36-45", "46-55"],
        excludeProducts: ["Credit Card"]
      },
      trackingParams: {
        utm_source: "savebest",
        utm_medium: "affiliate",
        utm_campaign: "net_worth_calculator"
      }
    },
    capital_one_venture: {
      name: "Capital One Venture",
      title: "💳 Capital One Venture Rewards",
      description: "Earn 75,000 bonus miles ($750 value) when you spend $4,000 in 3 months.",
      cta: "Apply Now",
      baseUrl: "https://www.capitalone.com/credit-cards/venture/",
      commission: "$50-100",
      requirements: {
        minNetWorth: "$100k–$500k",
        goals: ["Invest for Growth", "Save for Retirement"],
        ageRanges: ["26-35", "36-45", "46-55"],
        excludeProducts: ["Credit Card"]
      },
      trackingParams: {
        utm_source: "savebest",
        utm_medium: "affiliate",
        utm_campaign: "net_worth_calculator"
      }
    }
  },

  // Insurance (High Value: $50-100 per qualified quote)
  insurance: {
    policygenius_life: {
      name: "Policygenius - Life Insurance",
      title: "🛡️ Policygenius - Life Insurance",
      description: "Compare quotes from top insurers and save up to 50% on life insurance coverage.",
      cta: "Get Free Quote",
      baseUrl: "https://www.policygenius.com/life-insurance/",
      commission: "$50-100",
      requirements: {
        minNetWorth: "$100k–$500k",
        goals: ["Save for Retirement", "Build Emergency Fund"],
        ageRanges: ["26-35", "36-45", "46-55"],
        excludeProducts: ["Life Insurance"]
      },
      trackingParams: {
        utm_source: "savebest",
        utm_medium: "affiliate",
        utm_campaign: "net_worth_calculator"
      }
    },
    lemonade: {
      name: "Lemonade Insurance",
      title: "🍋 Lemonade - Renters & Home Insurance",
      description: "Get insured in 90 seconds, claims paid in 3 minutes. Starting at $5/month.",
      cta: "Get Insured",
      baseUrl: "https://www.lemonade.com/",
      commission: "$25-50",
      requirements: {
        minNetWorth: "$10k–$50k",
        goals: ["Build Emergency Fund", "Buy a Home"],
        ageRanges: ["18-25", "26-35", "36-45"]
      },
      trackingParams: {
        utm_source: "savebest",
        utm_medium: "affiliate",
        utm_campaign: "net_worth_calculator"
      }
    }
  },

  // Real Estate & Mortgages (High Value: $100+ per qualified application)
  realEstate: {
    rocket_mortgage: {
      name: "Rocket Mortgage",
      title: "🏠 Rocket Mortgage",
      description: "Get pre-approved in minutes and find the best mortgage rates. Save thousands on your home loan.",
      cta: "Get Pre-Approved",
      baseUrl: "https://www.rocketmortgage.com/",
      commission: "$100+",
      requirements: {
        minNetWorth: "$50k–$100k",
        goals: ["Buy a Home"],
        ageRanges: ["26-35", "36-45", "46-55"]
      },
      trackingParams: {
        utm_source: "savebest",
        utm_medium: "affiliate",
        utm_campaign: "net_worth_calculator"
      }
    },
    better_mortgage: {
      name: "Better.com",
      title: "🏠 Better.com - Digital Mortgage",
      description: "Get a mortgage in as little as 3 weeks with no hidden fees or commissions.",
      cta: "Get Started",
      baseUrl: "https://better.com/",
      commission: "$100+",
      requirements: {
        minNetWorth: "$100k–$500k",
        goals: ["Buy a Home"],
        ageRanges: ["26-35", "36-45", "46-55"]
      },
      trackingParams: {
        utm_source: "savebest",
        utm_medium: "affiliate",
        utm_campaign: "net_worth_calculator"
      }
    },
    fundrise: {
      name: "Fundrise",
      title: "🏢 Fundrise - Real Estate Investing",
      description: "Invest in real estate with as little as $10. Diversify your portfolio with private real estate.",
      cta: "Start Investing",
      baseUrl: "https://fundrise.com/",
      commission: "$50-100",
      requirements: {
        minNetWorth: "$100k–$500k",
        goals: ["Invest for Growth", "Save for Retirement"],
        ageRanges: ["26-35", "36-45", "46-55"]
      },
      trackingParams: {
        utm_source: "savebest",
        utm_medium: "affiliate",
        utm_campaign: "net_worth_calculator"
      }
    }
  },

  // Tax & Accounting (High Value: $10-25 per sale)
  tax: {
    turbotax: {
      name: "TurboTax",
      title: "📊 TurboTax - Tax Filing",
      description: "File your taxes with confidence. Get your maximum refund with step-by-step guidance.",
      cta: "Start Filing",
      baseUrl: "https://turbotax.intuit.com/",
      commission: "$10-25",
      requirements: {
        minNetWorth: "$100k–$500k",
        goals: ["Save for Retirement", "Invest for Growth"],
        ageRanges: ["26-35", "36-45", "46-55", "56-65"]
      },
      trackingParams: {
        utm_source: "savebest",
        utm_medium: "affiliate",
        utm_campaign: "net_worth_calculator"
      }
    },
    hrb: {
      name: "H&R Block",
      title: "📊 H&R Block - Tax Preparation",
      description: "Get your taxes done right with expert help. Maximum refund guaranteed.",
      cta: "File Now",
      baseUrl: "https://www.hrblock.com/",
      commission: "$10-25",
      requirements: {
        minNetWorth: "$50k–$100k",
        goals: ["Build Emergency Fund", "Pay Off Debt"],
        ageRanges: ["26-35", "36-45", "46-55"]
      },
      trackingParams: {
        utm_source: "savebest",
        utm_medium: "affiliate",
        utm_campaign: "net_worth_calculator"
      }
    }
  },

  // Banking & Savings (High Value: $25-50 per signup)
  banking: {
    sofi_money: {
      name: "SoFi Money",
      title: "🏦 SoFi Money - High-Yield Checking",
      description: "Earn up to 4.60% APY on savings and get up to 15% cash back on purchases.",
      cta: "Open Account",
      baseUrl: "https://www.sofi.com/money/",
      commission: "$25-50",
      requirements: {
        minNetWorth: "$10k–$50k",
        goals: ["Build Emergency Fund", "Pay Off Debt"],
        ageRanges: ["18-25", "26-35", "36-45"]
      },
      trackingParams: {
        utm_source: "savebest",
        utm_medium: "affiliate",
        utm_campaign: "net_worth_calculator"
      }
    },
    ally_bank: {
      name: "Ally Bank",
      title: "🏦 Ally Bank - High-Yield Savings",
      description: "Earn 4.25% APY on savings with no monthly fees or minimum balance requirements.",
      cta: "Open Account",
      baseUrl: "https://www.ally.com/bank/online-savings-account/",
      commission: "$25-50",
      requirements: {
        minNetWorth: "$10k–$50k",
        goals: ["Build Emergency Fund"],
        ageRanges: ["18-25", "26-35", "36-45", "46-55"]
      },
      trackingParams: {
        utm_source: "savebest",
        utm_medium: "affiliate",
        utm_campaign: "net_worth_calculator"
      }
    }
  }
};

// Helper function to check if user qualifies for an affiliate offer
function qualifiesForOffer(offer, userData) {
  const req = offer.requirements;
  
  // Check net worth requirement
  if (req.minNetWorth && !meetsNetWorthRequirement(userData.assetRange, req.minNetWorth)) {
    return false;
  }
  
  // Check goals requirement
  if (req.goals && !req.goals.includes(userData.financialGoal)) {
    return false;
  }
  
  // Check age requirement
  if (req.ageRanges && !req.ageRanges.includes(userData.ageRange)) {
    return false;
  }
  
  // Check excluded products
  if (req.excludeProducts && req.excludeProducts.includes(userData.financialProducts)) {
    return false;
  }
  
  return true;
}

// Helper function to compare net worth ranges
function meetsNetWorthRequirement(userNetWorth, requiredMin) {
  const netWorthOrder = ['<$10k', '$10k–$50k', '$50k–$100k', '$100k–$500k', '$500k–$1m', '$1m+'];
  const userIndex = netWorthOrder.indexOf(userNetWorth);
  const requiredIndex = netWorthOrder.indexOf(requiredMin);
  return userIndex >= requiredIndex;
}

// Function to build affiliate URL with tracking parameters
function buildAffiliateUrl(offer, userData) {
  const sabeid = getOrCreateUserId();
  const gclid = getGclid();
  
  let url = offer.baseUrl;
  const params = new URLSearchParams();
  
  // Add tracking parameters
  if (offer.trackingParams) {
    Object.entries(offer.trackingParams).forEach(([key, value]) => {
      params.append(key, value);
    });
  }
  
  // Add user-specific tracking
  params.append('fobs', sabeid);
  if (gclid) {
    params.append('fobs2', gclid);
  }
  
  // Add user data for personalization
  params.append('asset_range', userData.assetRange);
  params.append('financial_goal', userData.financialGoal);
  params.append('age_range', userData.ageRange);
  
  // Append parameters to URL
  const separator = url.includes('?') ? '&' : '?';
  url += separator + params.toString();
  
  return url;
}

// Function to get personalized recommendations based on user data
function getPersonalizedRecommendations(userData) {
  const recommendations = [];
  
  // Iterate through all affiliate categories
  Object.entries(AFFILIATE_CONFIG).forEach(([category, offers]) => {
    Object.entries(offers).forEach(([key, offer]) => {
      if (qualifiesForOffer(offer, userData)) {
        recommendations.push({
          ...offer,
          category: category,
          key: key,
          url: buildAffiliateUrl(offer, userData)
        });
      }
    });
  });
  
  // Sort by commission value (highest first)
  recommendations.sort((a, b) => {
    const aValue = parseCommissionValue(a.commission);
    const bValue = parseCommissionValue(b.commission);
    return bValue - aValue;
  });
  
  // Return top 4-6 recommendations
  return recommendations.slice(0, 6);
}

// Helper function to parse commission values for sorting
function parseCommissionValue(commission) {
  const match = commission.match(/\$(\d+)/);
  return match ? parseInt(match[1]) : 0;
}

// Export functions for use in main file
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    AFFILIATE_CONFIG,
    qualifiesForOffer,
    buildAffiliateUrl,
    getPersonalizedRecommendations
  };
}