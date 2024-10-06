const expectedOptions = [
  { name: "author", defaultValue: "Default Author" },
  { name: "thumbnail_url", defaultValue: "https://default-thumbnail-url.com" },
  { name: "title_url", defaultValue: "https://default-title-url.com" },
  { name: "body_text", defaultValue: "Default body text" },
  { name: "title_text", defaultValue: "Default title text" },
  { name: "image_url", defaultValue: "https://default-image-url.com" },
  { name: "color", defaultValue: "#000000" }, // Default color as black
  { name: "footer_text", defaultValue: "Default footer text" },
];

function isValidUrl(url) {
  return (
    typeof url === "string" &&
    (url.startsWith("http://") || url.startsWith("https://"))
  );
}

function convertOptionsToObject(options) {
  // Log raw options for debugging
  console.log("Raw options:", JSON.stringify(options, null, 2));

  const result = {};

  // The options.data contains the actual option objects
  options.data.forEach((option) => {
    // Log individual option for debugging
    console.log("Individual option:", JSON.stringify(option, null, 2));

    // If the option has sub-options, we need to handle that accordingly
    if (option.type === "SUB_COMMAND" || option.type === "SUB_COMMAND_GROUP") {
      // If it's a sub-command, recursively convert sub-options
      option.options.forEach((subOption) => {
        result[subOption.name] = subOption.value;
      });
    } else {
      // Otherwise, just add the main option
      result[option.name] = option.value;
    }
  });

  // Now sanitizing
  const sanitized = {};
  expectedOptions.forEach((option) => {
    // Use the result object to get the sanitized value
    sanitized[option.name] = result[option.name] || option.defaultValue;
  });

  return sanitized;
}

module.exports = { isValidUrl, convertOptionsToObject };
