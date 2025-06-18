<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/breakfast_menu">
        <html lang="en">

        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Document</title>
            <link 
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet"
                integrity="sha384-LN+7fdVzj6u52u30Kp6M/trliBMCMKTyK833zpbD+pXdCLuTusPj697FH4R/5mcr"
                crossorigin="anonymous" />
            <style>
                table tbody {
                    counter-reset: cnt;
                }
                table tbody tr td:first-child::before {
                    counter-increment: cnt;
                    content: counter(cnt);
                }
            </style>
        </head>

        <body>
            <main class="container">
                <h1>Jamal Resturant</h1>
                <h2>Breakfast Menu</h2>
                <div class="row">
                    <div class="col-lg-12">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>name</th>
                                    <th>price</th>
                                    <th>description</th>
                                    <th>calories</th>
                                </tr>
                            </thead>
                            <tbody>
                                <xsl:for-each select="food">
                                    <tr>
                                        <td>.</td>
                                        <td><xsl:value-of select="name" /></td>
                                        <td><xsl:value-of select="price" /></td>
                                        <td><xsl:value-of select="description" /></td>
                                        <td><xsl:value-of select="calories" /></td>
                                    </tr>
                                </xsl:for-each>
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-ndDqU0Gzau9qJ1lfW4pNLlhNTkCfHzAVBReH9diLvGRem5+R9g2FzA8ZGN954O5Q"
                crossorigin="anonymous"></script>
        </body>

        </html>
    </xsl:template>
</xsl:stylesheet>