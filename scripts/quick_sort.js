function Quick() {
    // Setting Time complexities
    document.getElementById("Time_Worst").innerText = "O(N^2)";
    document.getElementById("Time_Average").innerText = "Θ(N log N)";
    document.getElementById("Time_Best").innerText = "Ω(N log N)";

    // Setting Space complexity
    document.getElementById("Space_Worst").innerText = "O(log N)";

    c_delay = 0; // Delay for visualization (not explained in the code)

    quick_sort(0, array_size - 1); // Call the quick_sort function to sort the array

    enable_buttons(); // Enable buttons after sorting is complete
}

function quick_partition(start, end) {
    var i = start + 1;
    var piv = div_sizes[start]; // Make the first element as pivot element
    div_update(divs[start], div_sizes[start], "yellow"); // Color update - highlight the pivot element

    for (var j = start + 1; j <= end; j++) {
        // Re-arrange the array by putting elements which are less than the pivot on one side and which are greater than the pivot on the other side
        if (div_sizes[j] < piv) {
            div_update(divs[j], div_sizes[j], "yellow"); // Color update - highlight the element being compared

            div_update(divs[i], div_sizes[i], "red"); // Color update - highlight the element smaller than the pivot
            div_update(divs[j], div_sizes[j], "red"); // Color update - highlight the element being swapped with the smaller element

            // Swap the smaller element with the element at index i
            var temp = div_sizes[i];
            div_sizes[i] = div_sizes[j];
            div_sizes[j] = temp;

            div_update(divs[i], div_sizes[i], "red"); // Height update - update the height of the smaller element
            div_update(divs[j], div_sizes[j], "red"); // Height update - update the height of the element being swapped

            div_update(divs[i], div_sizes[i], "blue"); // Color update - revert the color of the smaller element
            div_update(divs[j], div_sizes[j], "blue"); // Color update - revert the color of the element being swapped

            i += 1; // Increment i to move to the next smaller element
        }
    }

    div_update(divs[start], div_sizes[start], "red"); // Color update - revert the color of the pivot element
    div_update(divs[i - 1], div_sizes[i - 1], "red"); // Color update - revert the color of the element at i-1

    // Put the pivot element in its proper place
    var temp = div_sizes[start];
    div_sizes[start] = div_sizes[i - 1];
    div_sizes[i - 1] = temp;

    div_update(divs[start], div_sizes[start], "red"); // Height update - update the height of the pivot element
    div_update(divs[i - 1], div_sizes[i - 1], "red"); // Height update - update the height of the element at i-1

    for (var t = start; t <= i; t++) {
        div_update(divs[t], div_sizes[t], "green"); // Color update - set the color of the elements smaller than or equal to the pivot to green
    }

    return i - 1; // Return the position of the pivot
}

function quick_sort(start, end) {
    if (start < end) {
        // Stores the position of pivot element
        var piv_pos = quick_partition (start, end ) ;     
        quick_sort (start, piv_pos -1);//sorts the left side of pivot.
        quick_sort (piv_pos +1, end) ;//sorts the right side of pivot.
    }
 }