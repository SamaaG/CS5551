using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Tutorial3___website.Startup))]
namespace Tutorial3___website
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
