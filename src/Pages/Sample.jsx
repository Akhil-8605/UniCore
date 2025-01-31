import React, { useEffect } from "react";

const VismeFormPage = () => {
    useEffect(() => {
        // Dynamically load the Visme embed script when the component is mounted
        const script = document.createElement("script");
        script.src = "https://static-bundles.visme.co/forms/vismeforms-embed.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Clean up by removing the script when the component unmounts
            document.body.removeChild(script);
        };
    }, []);

    const vismepage= [ {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f9f9f9',
        padding: '20px',
      }];
      

    return (
        <div style={{display: 'flex', justifyContent: 'center',alignItems: 'center',minHeight: '100vh',backgroundColor: '#f9f9f9'}}>
            {/* Embed code from Visme */}
            <div class="visme_d" data-title="B2B Newsletter Subscription" data-url="pvod1vrg-untitled-project" data-domain="forms" data-full-page="false" data-min-height="500px" data-form-id="111106"></div><script src="https://static-bundles.visme.co/forms/vismeforms-embed.js"></script>
        </div>
    );
};

export default VismeFormPage;
