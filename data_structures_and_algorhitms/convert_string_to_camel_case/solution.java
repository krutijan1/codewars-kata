import java.lang.StringBuilder;

class Solution {

  static String toCamelCase(String s) {
    String delimiter = s.contains("-") ? "-" : "_";

    String[] parts = s.split(delimiter);
    
    String result = parts[0];
    
    for(int i = 1; i < parts.length; i++) {
      result += parts[i].substring(0, 1).toUpperCase() + parts[i].substring(1);
    }
    
    return result;
  }
}
