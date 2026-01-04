/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    if (s.length !== t.length) return false; // if lengths differ, they can't be isomorphic

    const mapSToT = new Map(); // Map to store character mapping from s to t
    const mapTToS = new Map();  // Map to store character mapping from t to s
    // Iterate through characters of both strings
    for (let i = 0; i < s.length; i++) {
        const charS = s[i]; // character from s
        const charT = t[i]; // character from t

        // Check mapping from s to t
        if (!mapSToT.has(charS)) { // if charS is not mapped yet
            // Check mapping from t to s to ensure one-to-one mapping
            if (mapTToS.has(charT)) { // if charT is already mapped to a different charS
                return false; // inconsistent mapping found
            }
            mapSToT.set(charS, charT); // create mapping from s to t
            mapTToS.set(charT, charS); // create mapping from t to s
        } else if (mapSToT.get(charS) !== charT) { // if mapping exists but doesn't match charT
            return false; // inconsistent mapping found
        }
    }
    return true;
};