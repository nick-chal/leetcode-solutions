class MaxDepth {
    public static int maxDepth(String s) {
        int currDepth = 0;
        int maxDepth = 0;
        
        for(int i=0; i<s.length();i++){
            char currChar = s.charAt(i);
            if (currChar == '('){
                currDepth++;
            } else if (currChar == ')'){
                currDepth--;
            }
            
            maxDepth = Math.max(currDepth, maxDepth);
        }
        return maxDepth;
    }

    public static void main(String[] args) {
        System.out.println(maxDepth("(1+(2*3)+((8)/4))+1"));
    }

}