var lengthOfLongestSubstring = function lengthOfLongestSubstring(s) {
let windowStart = 0;
let windowEnd = 0;
let longestLength = 0;
let length = s.length;
while (windowEnd < length) {
if (s.slice(windowStart, windowEnd).includes(s[windowEnd])) {
if (windowEnd - windowStart > longestLength) {
longestLength = windowEnd - windowStart;
}
windowStart += s.slice(windowStart, windowEnd).indexOf(s[windowEnd]) + 1;
} else if (windowEnd + 1 === length) {
windowEnd++;
if (windowEnd - windowStart > longestLength) {
longestLength = windowEnd - windowStart;
}
windowStart = windowEnd;
}
windowEnd++;
}
return longestLength;}
