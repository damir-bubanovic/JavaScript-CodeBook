/*

!!TABLE - REGULAR EXPRESSION SPECIAL CHARACTERS!!

*/


Characters		Matches 																Example
^ 				Matches beginning of input 												/^This/ matches This is…
$ 				Matches end of input 													/end$/ matches This is the end
* 				Matches zero or more times 												/se*/ matches seeee as well as se
? 				Matches zero or one time 												/ap?/ matches apple and and
+ 				Matches one or more times 												/ap+/ matches apple but not and
{n} 			Matches exactly n times 												/ap{2}/ matches apple but not apie
{n,} 			Matches n or more times 												/ap{2,}/ matches all p’s in apple and appple but not apie
{n,m} 			Matches at least n, at most m times 									/ap{2,4}/ matches four p’s in apppppple
. 				Any character except newline 											/a.e/ matches ape and axe
[…] 			Any character within brackets 											/a[px]e/ matches ape and axe but not ale
[^…] 			Any character but those within brackets 								/a[^px]/ matches ale but not axe or ape
\b 				Matches on word boundary 												/\bno/ matches the first no in nono
\B 				Matches on nonword boundary 											/\Bno/ matches the second no in nono
\d 				Digits from 0 to 9 														/\d{3}/ matches 123 in Now in 123
\D 				Any nondigit character 													/\D{2,4}/ matches Now ' in ‘Now in 123;
\w 				Matches word character (letters, digits, underscores) 					/\w/ matches j in javascript
\W 				Matches any nonword character (not letters, digits,or underscores)
\/W/ 			matches % in 100%
\n 				Matches a line feed
\s 				A single whitespace character
\S 				A single character that is not whitespace
\t 				A tab
(x) 			Capturing parentheses 													Remembers the matched characters