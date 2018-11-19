function iterate(hash) {
    document.writeln('<table>');

        document.writeln('<tr><th>key</th><th>=&gt;</th><th>value</th></tr>');

        for(var key in hash) { // iteriert über alle keys des Hashs
            document.writeln('<tr>');
                document.writeln('<td>' + key + '</td>'); // aktueller "key"
                document.writeln('<td> =&gt; </td>');
                document.writeln('<td>' + hash[key] + '</td>' ); // Zugriff auf den zugeordeten Wert
            document.writeln('</tr>');
        }

    document.writeln('</table>');
}
