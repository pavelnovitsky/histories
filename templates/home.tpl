<ol>
    <% %>
    <% _.each(stories, function(story, i) { %>
        <li><a data-href="story/<%= i %>" href="#"><%= story %></a></li>
    <% }); %>
</ol>