export const HTTP_CLIENT_REDIRECT_DECISION_SYNTAX_ERROR : Function
    = (ret:any) => { 
        let errStr : string = ret?.error?.toString();
        return errStr?.startsWith("SyntaxError");
      };
