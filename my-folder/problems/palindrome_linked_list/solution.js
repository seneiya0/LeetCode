/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

function reverse(head){
    let current = head
    let prev = null
    let next
    
    while(current) {
        next = current.next
        current.next = prev
        prev = current
        current = next
    }
    
    return prev
}


var isPalindrome = function(head) {
    let f = head
    let s = head
    let startPointer = head
    let length = 0
    
    while(f && f.next){
        f = f.next.next
        s = s.next
        length++
    }
    
    let midPoint = reverse(s);
    
    while(length){
        length--
        if(midPoint.val !== startPointer.val){
            return false
        }
            midPoint = midPoint.next
            startPointer = startPointer.next
    }
    
    return true
    
};