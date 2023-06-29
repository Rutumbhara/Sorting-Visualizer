function Selection_sort(){

    //Setting Time complexities
    document.getElementById("Time_Worst").innerText = "O(N^2)";
    document.getElementById("Time_Average").innerText = "Θ(N^2)";
    document.getElementById("Time_Best").innerText = "Ω(N^2)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText = "O(1)";

    c_delay=0;   // Delay for visualization

    for(var i=0; i<array_size-1; i++){

        div_update(divs[i], div_sizes[i], "red");     //Color update - highlight the current element

        index_min = i;  // Assume the current element is the minimum

        for(var j=i+1; j<array_size; j++){

            div_update(divs[j], div_sizes[j], "yellow"); // Color update - highlight the element being compared

            if(div_sizes[j] < div_sizes[index_min]){

                if(index_min!=i){
                    div_update(divs[index_min], div_sizes[index_min], "blue");  // Color update - revert the previous minimum element color to blue
                }
                index_min = j;  // Update the index of the new minimum element
                div_update(divs[index_min], div_sizes[index_min], "red");   // Color update - highlight the new minimum element
            }
            else{
                div_update(divs[j], div_sizes[j], "blue");  // Color update - set the element color to blue as it's not the minimum
            }
        }
        
        if(index_min!=i){

            var temp = div_sizes[index_min];
            div_sizes[index_min] = div_sizes[i];
            div_sizes[i] = temp; 

            div_update(divs[index_min], div_sizes[index_min], "red");   // Height update - update the height of the new minimum element
            div_update(divs[i], div_sizes[i], "red");   // Height update - update the height of the current element
            div_update(divs[index_min], div_sizes[index_min], "blue");  // Color update - revert the color of the new minimum element to blue
        }
        div_update(divs[i], div_sizes[i], "green"); // Color update - set the color of the current element to green (sorted)
    }
    div_update(divs[i], div_sizes[i], "green"); // Color update - set the color of the current element to green (sorted)

    enable_buttons();   // Enable buttons after sorting is complete
}