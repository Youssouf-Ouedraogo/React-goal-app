public class First{

    public static int doThings(String s){
        try {
            int i = Integer.parseInt(s);
        } catch (Exception e) {
            //TODO: handle exception
        }
        return i;
    }
    
    public static void main(String[] args) {
        doThings("what");
    }
}