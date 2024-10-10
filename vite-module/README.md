# Teriyaki JS

Javascript Helper, inspired by jquery.

## Installation

![image](https://github.com/user-attachments/assets/88c6647b-0734-4a0c-8f2a-7cd89871b68a)

## Usage

1. Wait for document ready using $.ready()

![image](https://github.com/user-attachments/assets/3a5e83b1-7ab5-48fd-99a0-6c631b3638c9)

2. Get JSON Object from a URL using $.get_json()

![image](https://github.com/user-attachments/assets/f35485f0-49a0-496e-bbfa-59e444502101)

3. Get JSON Objct from a URL usgin $.get_json() (no cached)

![image](https://github.com/user-attachments/assets/c116ba2f-b7b7-47e8-89ce-6910bb21322a)

4. Create DOM Element from HTML using $.el()

![image](https://github.com/user-attachments/assets/fd7be907-a0ad-4591-9a5a-fec73229856f)

5. Using $.query(). A shortcut version of document.querySelector()

![image](https://github.com/user-attachments/assets/d53e6e70-6968-44f1-bf20-ee4a8a83f7be)

6. Using $.queryAll(). A shortcut version of document.querySelectorAll()

![image](https://github.com/user-attachments/assets/cb401b31-0c60-4f5e-87ab-74307f6d97b3)

7. Use $.default() to get value with fallback (if request object return null, undefined, empty string).

![image](https://github.com/user-attachments/assets/066b1cd3-33d7-4db4-8a23-d96552650493)

8. Create a wrapper around an element using $.wrap()

![image](https://github.com/user-attachments/assets/96a025e4-f7d0-4eaf-8aba-d41e1411edb0)

9. Create Teriyaki Element (similar to jQuery Object) from selector (can be either string or DOM Node)

![image](https://github.com/user-attachments/assets/82e3ddfb-13c3-47d4-ba42-a2bbc44aee60)

10. Create Teriyaki Elements from selector (can be either tring or DOM Node)

![image](https://github.com/user-attachments/assets/cbb78c7d-fbde-486c-8ba7-b5bbfacfc212)

11. Add event handler to a button using "on" from Teriyakit Element

![image](https://github.com/user-attachments/assets/30b318cf-2afd-494b-a187-37ef750feb4c)

12. Set color of H1 element to "red"

![image](https://github.com/user-attachments/assets/57ced975-5d3b-4b52-9298-0f8b0ef81a54)

13. Add class "text-green" to all P elements

![image](https://github.com/user-attachments/assets/f783d41a-ac63-485b-af07-84d276e3adb0)

14. Get UUID

![image](https://github.com/user-attachments/assets/68b96a9a-2da2-4437-969d-1361e518a81e)

15. Hide an element using hide() (from Teriyaki Element)

![image](https://github.com/user-attachments/assets/60bc4b7d-782e-4a8c-bfd2-8d9ce5e3f5d4)

16. Show hidden element using show() (from Teriyaki Element)
 
![image](https://github.com/user-attachments/assets/075bf77a-0a6a-403e-bf68-c74807edd980)

17. Set text of an element using text(str) (from Teriyaki Element)

![image](https://github.com/user-attachments/assets/852bc711-c0d1-4825-b57e-aa4c08d8c5b2)

18. Get text of an element using text() (from Teriyaki Element)

![image](https://github.com/user-attachments/assets/033d4815-93d4-4ab8-8216-2697df9c9753)

19. Set innerHTML of an element using html() (from Teriyaki Element)

![image](https://github.com/user-attachments/assets/8b46e303-fd8f-4b65-bced-d7459a6062bb)

20. Get innerHTML of an element using html() (from Teriyaki Element)

![image](https://github.com/user-attachments/assets/8c75c81b-4ba2-4eaf-b92a-b33c6f3aaacf)

21. Add class "text-red" on an element using addClass() (from Teriyaki Element)

![image](https://github.com/user-attachments/assets/cd088f51-937f-4fb6-bdd9-9fd7cce2256c)

22. Remove clas "hilight" from LI element which has "hilight" class

![image](https://github.com/user-attachments/assets/f39ed645-0a7b-489f-bb1e-22db28049942)

23. Fade in div#intro with animation duration = 500ms and a callback when animation ended.
  
![image](https://github.com/user-attachments/assets/6237f505-f104-4d65-acaf-11aa66acf263)

24. Fade out div#intro with animation duration = 500ms and a callback when animation ended.

![image](https://github.com/user-attachments/assets/ed37cac3-fe6f-4dd5-9d45-a71271ab0c45)

25. Set "data-role" attribute on H1 element

![image](https://github.com/user-attachments/assets/69ada833-be00-4ba4-b593-d976210b245c)

26. Get "data-role" attribute from H1 element 

![image](https://github.com/user-attachments/assets/ca99b887-42b0-42ae-a5f4-b3960cb18871)

27. Set data attribute on H1 element

![image](https://github.com/user-attachments/assets/3155b049-3927-4bde-9613-7a5da1424b17)

28. Get data attribute from H1 element

![image](https://github.com/user-attachments/assets/7222915b-c3f9-4c93-884b-2bb881964e5b)

29. Apply CSS on H1 element

![image](https://github.com/user-attachments/assets/1dee7d59-ee55-496a-9439-824c25a2b5fa)

31. Set innerHTML of an element + execute JavaScript using html_unsafe()

![image](https://github.com/user-attachments/assets/f7f2efec-e63b-4b20-b31e-f235560a6d97)

32. Get HTML from a URL then apply to div#app

![image](https://github.com/user-attachments/assets/ee5a1dee-ebf9-4138-ab55-7f7608b173e1)

33. Get Text from a URL then apply to H1 element

![image](https://github.com/user-attachments/assets/b8e626cd-fc88-4a10-b6fc-14a4107c6059)

34. Using $.log(), a shortcut version of console.log()

![image](https://github.com/user-attachments/assets/14f0f35f-b486-4613-8ddf-92cfebe8f7e8)

35. Get random value between min and max, using $.random(min, max) (min and max included)

![image](https://github.com/user-attachments/assets/1611e37c-917f-4f42-ac99-62bec78e545a)

## Authors

- Mr.Manit Treeprapankit
