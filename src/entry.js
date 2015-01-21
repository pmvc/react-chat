require(['react','./chat/index'],function(React,MyApp){
    var context = MyApp.createContext();
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      React.render(MyApp.getAppComponent()({
         context: context.getComponentContext()
      }), document.body);
      window.React=React;
    }else{
      global.app=MyApp;
    }
});
