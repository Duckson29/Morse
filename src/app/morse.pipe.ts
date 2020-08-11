import { Pipe, PipeTransform } from '@angular/core';
import { KeyedRead } from '@angular/compiler';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Pipe({
  name: 'morse'
})
export class MorsePipe implements PipeTransform {

  transform(value: string, args: string): string {
    let tempValue = "";
    for (let i = 0; i < value.length; i++) {

    switch (value.charAt(i)) {
      case "a":
        tempValue +=  "· -"
        break;
      case "b":
        tempValue +=  "- · · ·"
        break;
      case "c":
        tempValue +=  "- · - ·"
        break;
      case "d":
        tempValue +=  "- · ·"
        break;
      case "e":
        tempValue +=  "·"
        break;
      case "f":
        tempValue +=  "· · - ·"
        break;
      case "g":
        tempValue +=  "- - ·"
        break;
      case "h":
        tempValue +=  "· · · ·"
        break;
      case "i":
        tempValue +=  "· ·"
        break;
      case "j":
        tempValue +=  "· - - -"
        break;
      case "k":
        tempValue +=  "· - ·"
        break;
      case "l":
        tempValue +=  "· - · ·"
        break;
      case "n":
        tempValue +=  "- ·"
        break;
      case "m":
        tempValue +=  "- -"
        break;
      case "o":
        tempValue +=  "- - -"
        break;
      case "p":
        tempValue +=  "· - - ·"
        break;
      case "q":
        tempValue +=  "- - · -"
        break;
      case "r":
        tempValue +=  "· - ·"
        break;
      case "s":
        tempValue +=  "· · ·"
        break;
      case "t":
        tempValue +=  "-"
        break;
      case "u":
        tempValue +=  "· · -"
        break;
      case "v":
        tempValue +=  "· · · -"
        break;
      case "w":
        tempValue +=  "· - -"
        break;
      case "x":
        tempValue +=  "- · · -"
        break;
      case "y":
        tempValue +=  "- · - -"
        break;
      case "z":
        tempValue +=  "- - · ·"
        break;
      case "æ":
      case "ą":
      case "ä":
      tempValue +=  "· - · -"
      break;
      case "ø":
      case "ä":
      case "ą":
        tempValue +=  "- - - ·"
        break;
      case "å":
      case "à":
        tempValue +=  "· - - · -"
        break;
      case "1":
        tempValue +=  "· - - - -"
        break;
      case "2":
        tempValue +=  "· · - - -"
        break;
      case "3":
        tempValue +=  "· · · - -"
        break;
      case "4":
        tempValue +=  "· · · · -"
        break;
      case "5":
        tempValue +=  "· · · · ·"
        break;
      case "6":
        tempValue +=  "- · · · ·"
        break;
      case "7":
        tempValue +=  "- - · · ·"
        break;
      case "8":
        tempValue +=  "- - - · ·"
        break;
      case "9":
        tempValue +=  "- - - - ·"
        break;
      case "0":
        tempValue +=  "- - - - -"
        break;
      case ".":
         tempValue +=  "· — · — · —"
         break;
      case ",":
         tempValue +=  "——· · ——"
         break;
      case ":":
         tempValue +=  "———· · ·"
         break;
      case "?":
         tempValue +=  "· · ——· ·"
         break;
      case "'":
        tempValue +=  "· - - - - ·"
        break;
      case "-":
          tempValue +=  "- · · · · · -"
          break;
       case "/":
          tempValue +=  "- · · - ·"
          break;
       case "(":
          tempValue +=  "- · - - ·"
          break;
       case ")":
          tempValue +=  "- · - - · -"
          break;
      case '"':
          tempValue +=  "· - · · - ·"
          break;
      case "*":
          tempValue +=  "- · · -"
          break;
      case "@":
          tempValue +=  "· - - · - ·"
          break;
      case "\n":
          tempValue +=  "· - · -"
          break;
      default:

    }
  }
return tempValue;
  }

}
