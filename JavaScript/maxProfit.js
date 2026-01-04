/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    const lowest = prices[0];// Initialize lowest price to the first element
    const profit = 0;// Initialize profit to zero
    for (let i = 0; i < prices.length; i++) {// Iterate through the prices array
        if (prices[i] < lowest) {// Update lowest price if current price is lower
            lowest = prices[i];// Update lowest price
        }
        else if ((prices[i] - lowest) > profit) {// Calculate potential profit and update if it's higher than current profit
            profit = prices[i] - lowest;// Update profit
        }
    }
    return profit;
};