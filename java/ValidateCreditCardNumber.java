import java.util.ArrayList;

/**
 * ValidateCreditCardNumber
 */
public class ValidateCreditCardNumber {

    public static void main(String[] args) {
        char [] cardStr = "2342".toCharArray();
      // TODO: solution
    // String cardStr = n+"";
    ArrayList<Integer> cardArray = new ArrayList<Integer>();
    for(char s : cardStr){ 
        int cardNumber = Integer.parseInt(s+"");         
        cardArray.add(cardNumber);
    }
    if(cardArray.size()%2==0){
      for (int i = 0; i < cardArray.size(); i++){
        if(i%2==0){
         
        }
      }
    }else{
          for (int i = 0; i < cardArray.length; i++){
        // if(indexOf(cardArray[i])%2==0){
        //   cardArray.replace(cardArray[i], cardArray[i]*2);
        // }
      }
    }
    }
}