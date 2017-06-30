assert.throws(SyntaxError, function() {
 eval(" try { \
             throw new Error(\"...\");\
             return false;\
         } catch (EVAL) {\
             try\
             {\
               throw new Error(\"...\");\
             }catch(eval)\
             {\
                 return EVAL instanceof Error;\
              }\
         }");
});